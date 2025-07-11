import os
from dotenv import load_dotenv
import openai

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# Dummy conversion logic for testing
def convert_prompt_to_tool_call(prompt: str) -> dict:
    prompt = prompt.lower()
    if "calendar" in prompt:
        return {
            "tool": "Google Calendar",
            "action": "list_events",
            "details": {"date": "today"}
        }
    elif "email" in prompt:
        return {
            "tool": "Gmail",
            "action": "send_email",
            "details": {
                "to": "example@example.com",
                "subject": "Hi",
                "body": "This is an auto message"
            }
        }
    else:
        return {
            "tool": "Unknown",
            "action": "none",
            "details": {}
        }
