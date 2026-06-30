from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import projects_router, contact_router
from .database import Base, engine
from . import models

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5174", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Portfolio API is running"}

app.include_router(projects_router)
app.include_router(contact_router)