export default function PageLoader() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d1224",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Fira Code', monospace",
      gap: "1.5rem",
    }}>

      {/* Spinner */}
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "3px solid #1b2c68",
        borderTop: "3px solid #ec4899",
        borderRight: "3px solid #7c3aed",
        animation: "spin 0.8s linear infinite",
      }} />

      {/* Text */}
      <p style={{
        color: "#6b7280",
        fontSize: "0.8rem",
        letterSpacing: "0.15em",
      }}>
        <span style={{ color: "#ec4899" }}>loading</span>
        <span style={{ color: "#7c3aed" }}>()</span>
        <span style={{ color: "#6b7280" }}> ...</span>
      </p>

      {/* Keyframe injection */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

    </div>
  );
}