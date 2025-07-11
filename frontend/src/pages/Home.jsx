// pages/Home.jsx
import React, { useState } from "react";
import MCPConnectForm from "../components/MCPConnectForm";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  const [mcpUrl, setMcpUrl] = useState("");
  const userId = "clark123"; // static for now

  return (
    <div style={{ padding: 20 }}>
      <h1>Zapier MCP AI Assistant</h1>
      {!mcpUrl ? (
        <MCPConnectForm userId={userId} onConnected={setMcpUrl} />
      ) : (
        <ChatWindow userId={userId} mcpUrl={mcpUrl} />
      )}
    </div>
  );
}
