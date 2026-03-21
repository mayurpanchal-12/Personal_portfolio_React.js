import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "60vh",
          background: "#0d1224",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Fira Code', monospace",
        }}>
          <div style={{
            textAlign: "center",
            padding: "2.5rem",
            border: "1px solid #1b2c68",
            borderRadius: "12px",
            maxWidth: "420px",
            width: "90%",
          }}>

            <p style={{
              fontSize: "3rem",
              marginBottom: "1rem",
            }}>⚠️</p>

            <h2 style={{
              color: "#ec4899",
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}>
              Something went wrong
            </h2>

            <p style={{
              color: "#6b7280",
              fontSize: "0.8rem",
              marginBottom: "0.75rem",
            }}>
              {this.state.error?.message || "An unexpected error occurred."}
            </p>

            <div style={{
              height: "1px",
              background: "linear-gradient(to right, transparent, #1b2c68, transparent)",
              marginBottom: "1.5rem",
            }} />

            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              style={{
                padding: "0.5rem 1.75rem",
                background: "linear-gradient(to right, #ec4899, #7c3aed)",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontFamily: "'Fira Code', monospace",
                fontWeight: 600,
                cursor: "pointer",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={e => e.target.style.opacity = "0.85"}
              onMouseLeave={e => e.target.style.opacity = "1"}
            >
              Try Again
            </button>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}