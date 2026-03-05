FROM mcr.microsoft.com/playwright/python:v1.40.0-jammy

WORKDIR /app

COPY back/requirements.txt ./back/requirements.txt
RUN pip install --no-cache-dir -r back/requirements.txt

RUN npx --yes playwright install-deps chromium || apt-get update && apt-get install -y --no-install-recommends \
    libxfixes3 \
    && rm -rf /var/lib/apt/lists/*

COPY back/ ./back/
COPY front/ ./front/

RUN mkdir -p back/uploads back/data back/exports

ENV FLASK_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["gunicorn", "--chdir", "back", "--bind", "0.0.0.0:8080", "--workers", "2", "--timeout", "120", "app:app"]