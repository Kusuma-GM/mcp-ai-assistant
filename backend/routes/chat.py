# backend/routes/chat.py
from fastapi import APIRouter, Body
from utils.llm_handler import convert_prompt_to_tool_call

router = APIRouter(prefix="/chat")

@router.post("/")
def chat(prompt: str = Body(...), user_id: str = Body(...)):
    tool_call = convert_prompt_to_tool_call(prompt)
    # simulate tool call with mocked success
    return {"tool_call": tool_call, "result": "Action completed"}
