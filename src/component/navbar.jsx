import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";
import "./css/navbar.css";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar">

        <div className="navbar__gradient-line">
          <div className="navbar__gradient-line--left" />
          <div className="navbar__gradient-line--right" />
        </div>

        <div className="navbar__inner">
          <div className="navbar__brand">
            <Code2 size={16} className="navbar__brand-icon" />
            <span className="navbar__name">Mayur Panchal</span>
            <span className="navbar__separator">·</span>
            <span className="navbar__profession">Software Developer</span>
          </div>

          <ul className="navbar__links">
            {[
              { to: "/", label: "home" },
              { to: "/about", label: "about" },
              { to: "/projects", label: "projects" },
              { to: "/contact", label: "contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? "navbar__link--active" : ""}`
                  }
                >
                  <span className="navbar__link-slash">
  {"<"}
</span>
                  {label}
                  <span className="navbar__link-slash">
  {"/>"}
</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </Fragment>
  );
}
