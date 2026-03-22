export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #1b2c68",
        padding: "2rem 1.5rem",
        fontFamily: "'Fira Code', monospace",
            background: "linear-gradient(to right, #0d1224, #0a0d37)"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            <span style={{ fontSize: "0.95rem" }}>
              <span style={{ color: "#e5e7eb", fontWeight: 700 }}>
                MayurPanchal
              </span>
            </span>

            <span style={{ color: "#6b7280", fontSize: "0.75rem" }}>
              <span style={{ color: "#ec4899" }}>const </span>
              <span style={{ color: "#a5b4fc" }}>role </span>
              <span style={{ color: "#6b7280" }}>= </span>
              <span style={{ color: "#34d399" }}>
                "Software Developer"
              </span>
            </span>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "github", href: "https://github.com/mayurpanchal-12" },
            { label: "linkedin", href: "https://linkedin.com/in/YOUR-USERNAME" },
            { label: "email", href: "mailto:panchalmayur2004@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#6b7280",
                textDecoration: "none",
                fontSize: "0.78rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
              onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* RIGHT — empty (for perfect centering) */}
        <div style={{ flex: 1 }} />
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "1.5rem auto 0",
          paddingTop: "1rem",
          borderTop: "1px solid #1b2c68",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "#374151", fontSize: "0.75rem" }}>
          <span style={{ color: "#4b5563" }}>built by </span>
          <span style={{ color: "#ec4899" }}>Mayur Panchal </span>
          <span style={{ color: "#4b5563" }}>
            © {year} — all rights reserved
          </span>
        </span>
      </div>
    </footer>
  );
}