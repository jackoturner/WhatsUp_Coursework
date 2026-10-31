from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base


class Greeting(Base):
    __tablename__ = "greetings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=False)
    message: Mapped[str] = mapped_column(String(255), nullable=False)
