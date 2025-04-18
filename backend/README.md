## Repo structure

```bash
backend/
├── app/
│   ├── api/
│   │   └── endpoints/
│   │       ├── upload.py          # Endpoint to handle media uploads
│   │       ├── job.py             # Check status / results of submitted jobs
│   │       └── health.py          # Health check endpoint for uptime monitoring
│   │
│   ├── core/
│   │   ├── config.py              # App settings, env variables via Pydantic
│   │   └── security.py            # (Optional) Input validation, token-based security, etc.
│   │
│   ├── models/                    # Pydantic models for request/response schemas
│   │   └── schemas.py             # e.g., UploadRequest, PredictionResult, etc.
│   │
│   ├── services/
│   │   ├── deepfake_detector.py   # Loads & runs inference with ML models
│   │   ├── Virtus.py              # Handles frame extraction & preprocessing
│   │   └── scarlet.py             # Handles preprocessing of image inputs
│   │
│   ├── tasks/
│   │   └── process_video.py       # Background video analysis (e.g., Celery task)
│   │
│   ├── main.py                    # FastAPI app instance, routes mounting
│   └── __init__.py
│
├── tests/                         # Unit + integration tests for backend
│   ├── conftest.py                # Pytest fixtures
│   ├── test_upload.py
│   └── test_inference.py
│
├── Dockerfile                     # Backend Docker image config
├── celery_worker.py               # Celery worker bootstrap
├── pyproject.toml                 # Poetry + uv-compatible dependency definitions
├── .gitignore                     # Backend-specific ignore rules
└── README.md

```
