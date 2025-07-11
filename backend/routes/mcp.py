# backend/routes/mcp.py

from fastapi import APIRouter, Body, HTTPException
from typing import Dict
import requests

router = APIRouter(prefix="/mcp", tags=["MCP"])

# In-memory storage for user MCP URLs
user_mcp_servers: Dict[str, str] = {}

@router.post("/connect")
def connect_mcp(
    user_id: str = Body(..., embed=True),
    url: str = Body(..., embed=True)
):
    """
    Store and validate MCP server URL for a user.
    """
    # Optional: validate URL with a ping/test tool
    test_call = {
        "tool": "slack.get_conversation",  # Change based on tools you enabled
        "parameters": {}
    }

    try:
        response = requests.post(url, json=test_call, timeout=10)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=400, detail=f"Failed to connect to MCP: {str(e)}")

    # Save URL if test succeeded
    user_mcp_servers[user_id] = url

    return {
        "status": "connected",
        "user_id": user_id,
        "tools_available": ["slack.get_conversation"]  # Replace with real ones if needed
    }


@router.get("/config")
def get_mcp_config(user_id: str):
    """
    Get the stored MCP URL for a user.
    """
    url = user_mcp_servers.get(user_id)
    if not url:
        raise HTTPException(status_code=404, detail="No MCP URL found for this user.")
    
    return {
        "user_id": user_id,
        "mcp_url": url
    }
