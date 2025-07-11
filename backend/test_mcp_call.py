import requests
import json

MCP_URL = "https://mcp.zapier.com/api/mcp/s/ZGU4OGI5ZjktNDViZS00NGI4LTlkOWEtYjUxMDVhYWRkYmU2OmIwNzQyNjYwLWQ1NzUtNDQ2NC1hZWYzLTEyMmU5NDExYWJkOA==/mcp"

payload = {
    "jsonrpc": "2.0",
    "id": "1",
    "method": "call_tool",
    "params": {
        "tool": "google_calendar.list_events",
        "parameters": {
            "calendar_id": "primary",
            "max_results": 10
        }
    }
}

headers = {
    "Content-Type": "application/json",
    "Accept": "application/json, text/event-stream"
}

try:
    response = requests.post(MCP_URL, json=payload, headers=headers, timeout=60)
    response.raise_for_status()  # Raises error for 4xx/5xx
    print("✅ Status Code:", response.status_code)
    try:
        print("✅ MCP Response (JSON):")
        print(json.dumps(response.json(), indent=2))
    except json.JSONDecodeError:
        print("❌ Response not in JSON format:")
        print(response.text)
except requests.exceptions.RequestException as e:
    print("❌ Request failed:")
    print(str(e))
