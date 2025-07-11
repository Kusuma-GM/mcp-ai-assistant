// components/ChatWindow.jsx
import React, { useState } from "react";

export default function ChatWindow() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // 🔁 Mock response generator
    let responseText = "";
    const lower = input.toLowerCase();

    if (lower.includes("calendar")) {
      responseText = `✅ Upcoming Events:\n• Team Meeting at 10:00 AM on July 12, 2025\n• Project Demo at 2:00 PM on July 13, 2025`;
    } else if (lower.includes("email")) {
      responseText = `📧 Email Sent:\nTo: kusuma.gm@campusuvce.in\nSubject: "Test"\nMessage: "This is a test from my assistant"`;
    } else if (lower.includes("slack")) {
      responseText = `💬 Slack Message Sent:\nChannel: #general\nMessage: "Hello team, updates will follow shortly!"`;
    } else {
      responseText = `🤖 This is a demo response. No backend or MCP tools are connected.`;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: responseText }]);
      setLoading(false);
    }, 500); // Slight delay to simulate thinking
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h2>⚡ AI Assistant (Mock Mode)</h2>
      <div
        style={{
          minHeight: 150,
          padding: 10,
          background: "#f1f1f1",
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <strong>
              {msg.sender === "user"
                ? "You"
                : msg.sender === "ai"
                ? "AI"
                : "❌ Error"}
              :
            </strong>
            <div>{msg.text}</div>
          </div>
        ))}
      </div>

      <input
        placeholder="Ask something (e.g., 'List my calendar events')"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button onClick={sendPrompt} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
