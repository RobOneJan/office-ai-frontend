"use client";

import { useState, useEffect } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessages from "../components/ChatMessages";
import axios from "axios";

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);

  const sendMessage = async (text: string) => {
    const tenant = "private";
    const user = "me";
    const conversation_id = "frontend-demo";

    // Nachricht an Backend senden
    const res = await axios.post("http://localhost:8000/chat", {
      conversation_id,
      tenant_id: tenant,
      user_id: user,
      user_message: text
    });

    // Antwort des Bots speichern
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "bot", text: res.data.bot_message }
    ]);
  };

  return (
    <main style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <h1>Office AI Demo Chat</h1>
      <ChatMessages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </main>
  );
}
