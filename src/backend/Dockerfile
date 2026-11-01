FROM python:3.13-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

FROM base AS test
COPY requirements-dev.txt ./
RUN pip install --no-cache-dir -r requirements-dev.txt
COPY app/ ./app/
COPY tests/ ./tests/
COPY pyproject.toml ./
CMD ["python", "-m", "pytest"]

FROM base AS application
RUN groupadd --system app && useradd --system --gid app app
COPY --chown=app:app app/ ./app/
USER app
EXPOSE 8000

FROM application AS development
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload", "--reload-dir", "/app/app", "--reload-delay", "0.5"]

FROM application AS runtime
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
