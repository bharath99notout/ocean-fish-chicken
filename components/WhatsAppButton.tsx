const PHONE = "6366007222";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/91${PHONE}?text=Hi! I'd like to place an order.`}
      target="_blank"
      rel="noopener noreferrer"
      title="Order on WhatsApp"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#22c55e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        boxShadow: "0 4px 20px rgba(34,197,94,0.5)",
        zIndex: 1000,
        textDecoration: "none",
        animation: "pulse 2s infinite",
      }}
    >
      💬
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 4px 20px rgba(34,197,94,0.5); }
          50% { transform: scale(1.08); box-shadow: 0 6px 28px rgba(34,197,94,0.7); }
          100% { transform: scale(1); box-shadow: 0 4px 20px rgba(34,197,94,0.5); }
        }
      `}</style>
    </a>
  );
}
