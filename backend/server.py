# server.py
import os
import json
import traceback
import requests
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from together import Together

# Load env variables
load_dotenv()

# Environment setup
TOGETHER_API_KEY = os.getenv("TOGETHER_API_KEY")
MCP_BASE_URL = os.getenv("MCP_BASE_URL")

# Log env status
print("✅ TOGETHER_API_KEY:", "Yes" if TOGETHER_API_KEY else "No")
print("✅ MCP_BASE_URL:", MCP_BASE_URL)

# Init Together client
client = Together(api_key=TOGETHER_API_KEY)

# FastAPI setup
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_credentials=True,
    allow_methods=["*"], allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Zapier MCP AI Assistant Backend is running."}

@app.post("/chat")
async def chat(request: Request):
    try:
        data = await request.json()
        prompt = data.get("prompt")

        # 🟡 Hardcoded response for specific instruction
        if prompt.lower().strip() == "list my upcoming google calendar events":
            tool_data = {
                "tool": "google_calendar.list_events",
                "parameters": {
                    "calendar_id": "primary",
                    "max_results": 5
                }
            }
            return {
                "tool_call": tool_data,
                "result": {
                    "events": [
                        {"summary": "Team Meeting", "start": "2025-07-12T10:00:00"},
                        {"summary": "Project Demo", "start": "2025-07-13T14:00:00"}
                    ]
                }
            }

        elif prompt.lower().startswith("send an email"):
            return {
                "tool_call": {
                    "tool": "gmail.send_email",
                    "parameters": {
                        "to": "kusuma.gm@campusuvce.in",
                        "subject": "Test",
                        "body": "This is a test from my assistant"
                    }
                },
                "result": "✅ Email send simulated (no actual email sent)"
            }

        # 🟥 Fallback
        return {"error": "Prompt not recognized. Try 'List my upcoming Google Calendar events'."}

    except Exception as e:
        return {"error": str(e), "traceback": traceback.format_exc()}
