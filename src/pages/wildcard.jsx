import { useNavigate } from "react-router-dom";

export default function Wildcard() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d1224",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Fira Code', monospace",
    }}>
      <div style={{ textAlign: "center", padding: "2rem" }}>

        <h1 style={{
          fontSize: "clamp(6rem, 20vw, 10rem)",
          fontWeight: 800,
          background: "linear-gradient(to right, #ec4899, #7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          marginBottom: "1.5rem",
          userSelect: "none",
        }}>
          404
        </h1>

        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, #ec4899, #7c3aed, transparent)",
          marginBottom: "1.5rem",
        }} />

        <p style={{
          color: "#e5e7eb",
          fontSize: "1.1rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}>
          Page Not Found
        </p>
        <p style={{
          color: "#6b7280",
          fontSize: "0.85rem",
          marginBottom: "2.5rem",
        }}>
          Looks like this page took a coffee break and never came back.
        </p>

        {/* Go Home button */}
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "0.6rem 2rem",
            background: "linear-gradient(to right, #ec4899, #7c3aed)",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "0.9rem",
            fontFamily: "'Fira Code', monospace",
            fontWeight: 600,
            cursor: "pointer",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={e => e.target.style.opacity = "0.85"}
          onMouseLeave={e => e.target.style.opacity = "1"}
        >
          ← Go Home
        </button>

      </div>
    </div>
  );
}