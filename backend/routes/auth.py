# backend/routes/auth.py
from fastapi import APIRouter

router = APIRouter(prefix="/auth")

@router.post("/login")
def login():
    return {"message": "User logged in", "user_id": "clark"}  # mock user ID
