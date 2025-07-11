# backend/test_direct_tool_call.py

instruction = "list calendar events"

if instruction.lower() == "list calendar events":
    tool_call = {
        "tool": "google_calendar.list_events",
        "parameters": {
            "calendar_id": "primary",
            "max_results": 10
        }
    }

    print("✅ Tool Call JSON:")
    print(tool_call)
else:
    print("❌ Instruction not recognized.")
