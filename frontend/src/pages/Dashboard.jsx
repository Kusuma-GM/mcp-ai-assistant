import React from "react";
import MCPConnectForm from "../components/MCPConnectForm";
import ChatWindow from "../components/ChatWindow";

export default function Dashboard() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the AI Assistant</h1>
      <MCPConnectForm />
      <ChatWindow />
    </div>
  );
}
