

import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../component/projectsData";
import "./css/projectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div className="pd__not-found">
      <span className="c-keyword">throw </span>
      <span className="c-string">'project not found'</span>
    </div>
  );

  return (
    <div className="pd">

      <div className="pd__top-line">
        <div className="pd__top-line--left" />
        <div className="pd__top-line--right" />
      </div>

      <button className="pd__back" onClick={() => navigate(-1)}>
        <span className="c-keyword">← </span>
        <span className="c-gray">back</span>
      </button>

      <div className="pd__header">
        <div className="pd__header-dots">
          <div className="pd__dot pd__dot--red" />
          <div className="pd__dot pd__dot--orange" />
          <div className="pd__dot pd__dot--green" />
          <span className="pd__filename">{project.id}.jsx</span>
        </div>
        <div className="pd__title-code">
          <span className="c-keyword">const </span>
          <span className="c-white">
            {project.name
              .split(" ")
              .filter(Boolean)
              .map((w, i) => i === 0
                ? w.toLowerCase()
                : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
              .join("")}
          </span>
          <span className="c-gray"> = {"{"}</span>
        </div>
      </div>

      <div className="pd__grid pd__grid--top">

        <div className="pd__card">
          <div className="pd__card-section-label">
            <span className="c-key">overview</span>
          </div>
          <h2 className="pd__project-name">{project.name}</h2>
          <p className="pd__long-desc">{project.longDesc}</p>
          <div className="pd__tech-tags">
            {project.tech.map(t => (
              <span key={t} className="pd__tech-tag">{t}</span>
            ))}
          </div>
          <div className="pd__action-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="pd__btn">GitHub</a>
            <a href={project.live}   target="_blank" rel="noreferrer" className="pd__btn pd__btn--live">Live →</a>
           
          </div>
        </div>

        <div className="pd__card">
          <div className="pd__card-section-label">
            <span className="c-key">meta</span>
          </div>
          <code className="pd__code">
           
            <div className="pd__code-line">
              <span className="c-key">status</span><span className="c-gray">: </span>
              <span className={project.status === "Completed" ? "c-bool" : "c-pink"}>'{project.status}'</span>
              <span className="c-gray">,</span>
            </div>
            <div className="pd__code-line">
              <span className="c-key">features</span><span className="c-gray">: [</span>
              <div className="pd__array">
                {project.features.map((f, i) => (
                  <div key={f} className="pd__array-item">
                    <span className="c-string">'{f}'</span>
                    {i < project.features.length - 1 && <span className="c-gray">,</span>}
                  </div>
                ))}
              </div>
                <div className="w-full">
    <span className="c-gray">]</span>
  </div>
            </div>
          </code>
        </div>

      </div>

      {project.appFlow && (
        <div className="pd__section">
          <div className="pd__section-label">
            <span className="c-key">application</span>
            <span className="c-pink">.</span>
            <span className="c-fn">flow</span>
          </div>
          <div className="pd__card pd__flow-card">
            <div className="pd__flow">
              {project.appFlow.map((step, i) => (
                <div key={i} className="pd__flow-item">
                  <div className="pd__flow-left">
                    <div className={`pd__flow-dot ${i === project.appFlow.length - 1 ? "pd__flow-dot--end" : ""}`} />
                    {i < project.appFlow.length - 1 && <div className="pd__flow-line" />}
                  </div>
                  <div className="pd__flow-text">
                    {step.arrow
                      ? <span className="pd__flow-arrow">{step.text}</span>
                      : <span className="c-string">'{step.text}'</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {project.routes && (
        <div className="pd__section">
          <div className="pd__section-label">
            <span className="c-key">navigation</span>
            <span className="c-pink">.</span>
            <span className="c-fn">routes</span>
          </div>
          <div className="pd__nav-grid">
            {project.routes.map((r, i) => (
              <div key={i} className="pd__nav-item">
                <span className="pd__nav-icon">{r.icon}</span>
                <span className="pd__nav-label">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
     
      {project.highlights && (
        <div className="pd__section">
          <div className="pd__section-label">
            <span className="c-key">engineering</span>
            <span className="c-pink">.</span>
            <span className="c-fn">highlights</span>
          </div>
          <div className="pd__highlights-grid">
            {project.highlights.map((h, i) => (
              <div key={i} className="pd__highlight-box">
                <div className="pd__highlight-title">{h.label}</div>
                <div className="pd__highlight-body">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

     

     

      {project.errorFlows && (
        <div className="pd__section">
          <div className="pd__section-label">
            <span className="c-key">error</span>
            <span className="c-pink">.</span>
            <span className="c-fn">handling</span>
          </div>
          <div className="pd__error-grid">
            {project.errorFlows.map((flow, i) => (
              <div key={i} className="pd__card pd__error-card">
                <div className="pd__error-label">{flow.title}</div>
                {flow.steps.map((s, j) => (
                  <div key={j} className={`pd__error-step ${s.type === "trigger" ? "pd__error-step--trigger" : s.type === "ok" ? "pd__error-step--ok" : ""}`}>
                    {s.text}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {project.techStack && (
        <div className="pd__section">
          <div className="pd__section-label">
            <span className="c-key">tech</span>
            <span className="c-pink">.</span>
            <span className="c-fn">stack</span>
          </div>
          <div className="pd__tech-grid">
            {project.techStack.map((t, i) => (
              <div key={i} className="pd__tech-item">
                <div className="pd__tech-item-name">{t.name}</div>
                <div className="pd__tech-item-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="pd__closing">
        <span className="c-gray">{"}"}</span>
      </div>

    </div>
  );
}