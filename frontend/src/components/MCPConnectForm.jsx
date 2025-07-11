// components/MCPConnectForm.jsx
import React, { useState } from "react";

export default function MCPConnectForm({ userId, onConnected }) {
  const [url, setUrl] = useState("");
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const connect = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("http://127.0.0.1:8000/mcp/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, user_id: userId }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Failed to connect");
      }

      setTools(data.tools || []);
      setSuccess(true);

      if (onConnected) {
        onConnected(url); // callback to parent to save or show chat
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Connect to MCP</h2>
      <input
        placeholder="Paste your MCP Server URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button onClick={connect} disabled={loading}>
        {loading ? "Connecting..." : "Connect"}
      </button>

      {success && <p style={{ color: "green" }}>✅ Connected successfully!</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {tools.length > 0 && (
        <div>
          <h4>Available Tools</h4>
          <ul>
            {tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
