from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.project import Project

router = APIRouter(prefix="/projects", tags=["projects"])

@router.get("/")
def get_projects(db: Session = Depends(get_db)):
    return db.query(Project).all()