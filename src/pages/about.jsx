import "./css/about.css";
import { useNavigate } from "react-router-dom";
import { projects } from "../component/projectsData";
import Mayur from "../component/Mayur.jpg";
const education = [
  {
    type: "degree",
    degree: "BSC-Computer Science",
    institute: "Savitribai Phule Pune University.",
    year: "2022 – 2025",
    grade: "8 CGPA",
  },
 
];

const contacts = [
 { label: "email",  
   value: "panchalmayur2004@gmail.com",   
    href: "mailto:mayur@email.com" },
  {
  label: "github",
  value: "mayurpanchal-12",
  href: "https://github.com/mayurpanchal-12"
},
{
  label: "LinkedIn",
  value: "mayur-panchal-111548243",
  href: "https://www.linkedin.com/in/mayur-panchal-111548243"
}
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      <section className="about-page__hero">

        <div className="about-page__hero-line">
          <div className="about-page__hero-line--left" />
          <div className="about-page__hero-line--right" />
        </div>

        <div className="about-page__profile">
          <div className="about-page__img-wrap">
            <div className="about-page__img-glow" />
            <img src={Mayur} alt="Mayur Panchal" className="about-page__img" />
            <div className="about-page__img-offset" />
          </div>

          <div className="about-page__info">
            <p className="about-page__greeting">
              <span className="c-keyword">const</span>
              <span className="c-var"> developer</span>
              <span className="c-keyword"> = </span>
              <span className="c-value">"Mayur Panchal"</span>
            </p>
            <p className="about-page__role">React Developer</p>
            <p className="about-page__bio">
             Passionate React Developer  with hands-on experience building
  production-grade React applications with Firebase, Firestore,Cloudinary, Context API, and TailwindCSS. Skilled in real-world engineering practices including
  role-based access control, real-time data sync, PWA support, cloud storage, and performance optimization with code splitting and lazy
  loading. Familiar with GitHub, Vercel, and modern tooling like Vite.
            </p>
            <div className="about-page__tags">
              {["React.js","Javascript(ES6+)","Redux Toolkit","Router","Context API",
              "Firebase","Cloudinary","Tailwind Css","Css","Vercel deployment","Email.js", "Github", "html" , "Networking"].map(t => (
                <span key={t} className="about-page__tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-page__edu">
          <h3 className="about-page__sub-title">
            education<span className="c-pink">.</span>log
          </h3>
          <div className="about-page__timeline">
            {education.map((e, i) => (
              <div key={i} className="about-page__timeline-item">
                <div className={`about-page__timeline-marker ${e.type === "cert" ? "about-page__timeline-marker--cert" : ""}`} />
                <div className="about-page__timeline-card">
                  <span className="about-page__timeline-year">{e.year}</span>
                  <h4 className="about-page__timeline-degree">{e.degree}</h4>
                  <p className="about-page__timeline-institute">{e.institute}</p>
                  <span className="about-page__timeline-grade">{e.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="about-page__contact">
        <h3 className="about-page__sub-title">
          get<span className="c-pink">.</span>inTouch
        </h3>
        <div className="about-page__contact-grid">
          <p className="about-page__contact-text">
            I'm always open to new projects, creative ideas or opportunities.
            Feel free to reach out.
          </p>
          <div className="about-page__contact-links">
            {contacts.map(({ label, value, href }) => (
              <a key={label} href={href} className="about-page__contact-link">
                <span className="about-page__contact-label">{label}:</span>
                <span className="about-page__contact-value">"{value}"</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__projects">
        <h3 className="about-page__sub-title">
          my<span className="c-pink">.</span>projects
        </h3>
        <div className="about-page__projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="about-page__card">

              <div className="about-page__card-line">
                <div className="about-page__card-line--left" />
                <div className="about-page__card-line--right" />
              </div>

              <div className="about-page__card-dots">
                <div className="about-page__dot about-page__dot--red" />
                <div className="about-page__dot about-page__dot--orange" />
                <div className="about-page__dot about-page__dot--green" />
                <span className="about-page__card-filename">{p.name.toLowerCase().replace(/ /g,"_")}.js</span>
              </div>

              <div className="about-page__card-body">
                <code className="about-page__code">
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
                className="about-page__detail-btn"
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

    </div>
  );
}
