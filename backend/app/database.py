"""Database connection configuration and request-scoped sessions."""

import os
from collections.abc import Iterator
from functools import lru_cache

from sqlalchemy import URL, Engine, create_engine
from sqlalchemy.orm import Session


@lru_cache
def get_engine() -> Engine:
    # URL.create safely handles passwords containing URL-special characters.
    url = URL.create(
        "mysql+pymysql",
        username=os.environ["DB_USER"],
        password=os.environ["DB_PASSWORD"],
        host=os.environ.get("DB_HOST", "database"),
        port=int(os.environ.get("DB_PORT", "3306")),
        database=os.environ["DB_NAME"],
        query={"charset": "utf8mb4"},
    )
    return create_engine(
        url,
        pool_pre_ping=True,
        pool_recycle=1800,
        connect_args={"connect_timeout": 5, "read_timeout": 5, "write_timeout": 5},
    )


def get_db() -> Iterator[Session]:
    with Session(get_engine()) as session:
        yield session
