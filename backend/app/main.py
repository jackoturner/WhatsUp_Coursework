import logging
from typing import Annotated

from fastapi import Depends, FastAPI, Request
from fastapi.responses import JSONResponse
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.controllers.greeting import router as greeting_router
from app.database import get_db

logger = logging.getLogger(__name__)

app = FastAPI(
    title="WhatsUpTeam API",
    docs_url="/api/docs",
    redoc_url=None,
    openapi_url="/api/openapi.json",
)
app.include_router(greeting_router, prefix="/api")


@app.exception_handler(SQLAlchemyError)
async def database_error_handler(request: Request, exc: SQLAlchemyError) -> JSONResponse:
    logger.error("Database operation failed", exc_info=exc)
    return JSONResponse(
        status_code=503,
        content={"detail": "Database is temporarily unavailable."},
    )


@app.get("/api/health", tags=["health"])
def health(db: Annotated[Session, Depends(get_db)]) -> dict[str, str]:
    db.execute(text("SELECT 1"))
    return {"status": "ok"}
