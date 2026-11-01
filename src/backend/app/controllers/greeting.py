from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.greeting import Greeting
from app.views.greeting import GreetingView

router = APIRouter(prefix="/greetings", tags=["greetings"])


@router.get("/hello", response_model=GreetingView)
def get_hello(db: Annotated[Session, Depends(get_db)]) -> GreetingView:
    greeting = db.get(Greeting, 1)
    if greeting is None:
        raise HTTPException(status_code=404, detail="Greeting not found.")
    return GreetingView.model_validate(greeting)
