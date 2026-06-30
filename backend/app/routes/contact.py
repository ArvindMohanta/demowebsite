from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from ..database import get_db
from ..models.contact import Contact

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

router = APIRouter(prefix="/contact", tags=["contact"])

@router.post("/")
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    db_contact = Contact(name=contact.name, email=contact.email, message=contact.message)
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact