import "./css/projects.css";
import { useNavigate } from "react-router-dom";
import { projects } from "../component/projectsData";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects">
      <div className="section__heading">
        <div className="section__line--left" />
        <div className="section__line--right" />
        <h2 className="section__title">my<span className="section__dot">.</span>projects</h2>
      </div>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <div key={i} className="projects__card">

            <div className="projects__card-line">
              <div className="projects__card-line--left" />
              <div className="projects__card-line--right" />
            </div>

            <div className="projects__card-dots">
              <div className="projects__dot projects__dot--red" />
              <div className="projects__dot projects__dot--orange" />
              <div className="projects__dot projects__dot--green" />
              <span className="projects__card-filename">{p.name.toLowerCase().replace(/ /g,"_")}.jsx</span>
            </div>

            <div className="projects__card-body">
              <code className="projects__code">
                <div>
                  <span className="cc-keyword">const </span>
                  <span className="cc-var">{p.name.replace(/ /g,"")}</span>
                  <span className="cc-gray"> = {"{"}</span>
                </div>
                <span className="cc-indent">
                  <span className="cc-key">name</span><span className="cc-gray">: </span>
                  <span className="cc-string">'{p.name}'</span><span className="cc-gray">,</span>
                </span>
                <span className="cc-indent">
                  <span className="cc-key">desc</span><span className="cc-gray">: </span>
                  <span className="cc-string">'{p.desc}'</span><span className="cc-gray">,</span>
                </span>
                <span className="cc-indent">
                  <span className="cc-key">tech</span><span className="cc-gray">: [</span>
                  {p.tech.map((t, j) => (
                    <span key={t}>
                      <span className="cc-string">'{t}'</span>
                      {j < p.tech.length - 1 && <span className="cc-gray">, </span>}
                    </span>
                  ))}
                  <span className="cc-gray">],</span>
                </span>
                <span className="cc-indent">
                  <span className="cc-key">status</span><span className="cc-gray">: </span>
                  <span className="cc-bool">true</span><span className="cc-gray">,</span>
                </span>
                <span className="cc-indent">
                  <span className="cc-fn">links</span>
                  <span className="cc-gray">: {"() => ("}</span>
                </span>
                <span className="cc-indent2">
                  <a href={p.github} target="_blank" rel="noreferrer" className="cc-link">github</a>
                  <span className="cc-gray"> | </span>
                  <a href={p.live} target="_blank" rel="noreferrer" className="cc-link cc-link--live">live</a>
                                    
                </span>
                <span className="cc-indent"><span className="cc-gray">{")"}</span></span>
                <div><span className="cc-gray">{"}"}</span></div>
              </code>
            </div>

            <button
              className="projects__detail-btn"
              onClick={() => navigate(`/projects/${p.id}`)}
            >
              <span className="cc-keyword">view</span>
              <span className="cc-gray">(</span>
              <span className="cc-string">'details'</span>
              <span className="cc-gray">)</span>
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}
