def call_mcp_tool(user_id, tool, action):
    return {"result": f"{tool} {action} executed for user {user_id}"}
