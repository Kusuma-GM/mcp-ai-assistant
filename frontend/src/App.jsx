// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [mcpUrl, setMcpUrl] = useState("");
  const [instruction, setInstruction] = useState("");
  const [connected, setConnected] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [tools, setTools] = useState([]);

  const handleLogin = () => {
    if (!userEmail.includes("@")) {
      alert("Enter a valid email to login");
      return;
    }
    setLoggedIn(true);
  };

  const handleConnect = () => {
    if (!mcpUrl.startsWith("https://")) {
      alert("Please enter a valid MCP URL starting with https://");
      return;
    }
    setConnected(true);
    setError("");
    alert("✅ Connected to MCP (simulated)");
    setTools(["Gmail", "Google Calendar", "Slack", "Zoom"]);
  };

  const handleSend = () => {
    if (!instruction || !connected) {
      alert("Please connect and enter instruction.");
      return;
    }

    const lower = instruction.toLowerCase();

    let mockResult = "";
    if (lower.includes("calendar")) {
      mockResult = `✅ Upcoming Events:\n• Team Meeting at 10:00 AM\n• Demo Day on Friday`;
    } else if (lower.includes("email")) {
      mockResult = `📧 Email Sent:\nTo: kusuma.gm@campusuvce.in\nSubject: \"Test\"\nMessage: \"This is a test from my assistant\"`;
    } else if (lower.includes("slack")) {
      mockResult = `💬 Slack Message Sent to #general`;
    } else if (lower.includes("zoom")) {
      mockResult = `📅 Zoom Meeting Scheduled:\nWith: Team\nTime: 3:00 PM Tomorrow`;
    } else {
      mockResult = `🤖 This is a demo. No backend call made.`;
    }

    setOutput(mockResult);
    setError("");
  };

  const handleRevoke = () => {
    setConnected(false);
    setMcpUrl("");
    setTools([]);
    alert("❌ MCP access revoked");
  };

  return (
    <div className="container">
      <h2>🔐 AI Assistant SaaS with Zapier MCP</h2>

      {!loggedIn ? (
        <div>
          <h4>👤 Login</h4>
          <input
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={{ width: "80%" }}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <>
          <h4>🔗 Connect to MCP</h4>
          <input
            type="text"
            placeholder="Enter your MCP URL"
            value={mcpUrl}
            onChange={(e) => setMcpUrl(e.target.value)}
            style={{ width: "80%" }}
            disabled={connected}
          />
          <button onClick={handleConnect} disabled={connected}>Connect</button>
          {connected && (
            <>
              <p style={{ marginTop: 10 }}>🔌 <b>Connected Tools:</b></p>
              <ul>
                {tools.map((tool, idx) => (
                  <li key={idx}>
                    {tool === "Gmail" && "📧 "}
                    {tool === "Google Calendar" && "📅 "}
                    {tool === "Slack" && "💬 "}
                    {tool === "Zoom" && "📞 "}
                    {tool} – Connected
                  </li>
                ))}
              </ul>
              <button style={{ backgroundColor: "red", color: "white" }} onClick={handleRevoke}>
                ❌ Revoke Access
              </button>
            </>
          )}

          <br /><br />
          <input
            type="text"
            placeholder="Enter your instruction (e.g. list events)"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            style={{ width: "80%" }}
          />
          <button onClick={handleSend}>Send</button>

          <div className="output" style={{ marginTop: 20 }}>
            {error && <p style={{ color: "red" }}>❌ {error}</p>}
            {output && (
              <pre
                style={{
                  background: "#f0f0f0",
                  padding: 10,
                  borderRadius: 8,
                  whiteSpace: "pre-wrap",
                }}
              >
                {output}
              </pre>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
