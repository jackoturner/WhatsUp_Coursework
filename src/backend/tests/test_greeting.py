import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError
from sqlalchemy.orm import Session
from sqlalchemy.pool import StaticPool

from app.database import get_db
from app.main import app
from app.models.base import Base
from app.models.greeting import Greeting


@pytest.fixture
def database():
    engine = create_engine(
        "sqlite://",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    Base.metadata.create_all(engine)
    with Session(engine) as session:
        yield session
    engine.dispose()


@pytest.fixture
def client(database):
    def override_db():
        yield database

    app.dependency_overrides[get_db] = override_db
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()


def test_greeting_reads_the_stored_value(client, database):
    # A different value proves the controller reads the database, not a constant.
    database.add(Greeting(id=1, message="hello from a test database"))
    database.commit()

    response = client.get("/api/greetings/hello")

    assert response.status_code == 200
    assert response.json() == {"message": "hello from a test database"}


def test_missing_greeting_returns_404(client):
    response = client.get("/api/greetings/hello")

    assert response.status_code == 404
    assert response.json() == {"detail": "Greeting not found."}


def test_database_failure_returns_503_without_connection_details(client):
    def unavailable_db():
        raise OperationalError("SELECT", {}, Exception("private connection details"))
        yield  # Make this a dependency with the same lifetime as get_db.

    app.dependency_overrides[get_db] = unavailable_db

    response = client.get("/api/greetings/hello")

    assert response.status_code == 503
    assert response.json() == {"detail": "Database is temporarily unavailable."}
