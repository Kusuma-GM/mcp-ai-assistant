# test_together.py

from together import Together
import os
from dotenv import load_dotenv

# Load the API key
load_dotenv()
api_key = os.getenv("TOGETHER_API_KEY")

print("API Key Loaded:", "Yes" if api_key else "No")
print("API Key Preview:", api_key[:6] + "..." + api_key[-4:])

# Initialize Together client
client = Together(api_key=api_key)

# Call the chat model
response = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-V3",  # You can change to other models too
    messages=[
        {"role": "user", "content": "Say hello!"}
    ]
)

# Print the assistant's reply
print("Assistant:", response.choices[0].message.content)
