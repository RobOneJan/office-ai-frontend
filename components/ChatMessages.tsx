interface ChatMessagesProps {
    messages: { role: string; text: string }[];
  }
  
  export default function ChatMessages({ messages }: ChatMessagesProps) {
    return (
      <div style={{ marginTop: "30px", maxHeight: "400px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: "10px", textAlign: m.role === "bot" ? "left" : "right" }}>
            <span style={{
              display: "inline-block",
              padding: "8px 12px",
              borderRadius: "12px",
              background: m.role === "bot" ? "#f1f1f1" : "#0070f3",
              color: m.role === "bot" ? "#000" : "#fff"
            }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>
    );
  }
  