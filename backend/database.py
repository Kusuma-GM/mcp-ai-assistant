users = {}

def save_user(user_id, mcp_url):
    users[user_id] = mcp_url

def get_user(user_id):
    return users.get(user_id)
