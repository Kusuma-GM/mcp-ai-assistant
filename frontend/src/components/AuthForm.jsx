// components/AuthForm.jsx
import React from "react";

export default function AuthForm({ setUserId }) {
  return (
    <div>
      <button onClick={() => setUserId("clark")}>Login as Clark</button>
    </div>
  );
}
