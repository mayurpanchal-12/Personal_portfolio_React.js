import "./css/intro.css";
import Mayur from "./Mayur.jpg";

export default function Intro() {
  return (
    <section className="about">
      <div className="about__heading">
        <div className="about__heading-line--left" />
        <div className="about__heading-line--right" />
        <h2 className="about__heading-text">
          about<span className="about__heading-dot">.</span>me
        </h2>
      </div>

      <div className="about__grid">
        {/* Left — Image */}
        <div className="about__img-wrapper">
          <div className="about__img-glow" />
          <img src={Mayur} alt="Mayur Panchal" className="about__img" />
          <div className="about__img-offset" />
        </div>

        <div className="about__content">
          <p className="about__intro">
            <span className="about__intro-const">const</span>
            <span className="about__intro-var"> developer</span>
            <span className="about__intro-eq"> = </span>
            <span className="about__intro-name">"Mayur Panchal"</span>
          </p>

          <p className="about__bio">
  Passionate React Developer  with hands-on experience building
  production-grade React applications with Firebase, Firestore,Cloudinary, Context API, and TailwindCSS. Skilled in real-world engineering practices including
  role-based access control, real-time data sync, PWA support, cloud storage, and performance optimization with code splitting and lazy
  loading. Familiar with GitHub, Vercel, and modern tooling like Vite.
</p>

          <div className="about__tags">
            {[
              "html",
              "Css",
              "Tailwind Css",
              "Javascript",
              "React.js",
              "MySQL",
              "Firebase",
              "Cloudinary",
              "Github",
              "Vercel deployment",
              "github pages ",
              "Networking",
              "Cybersecurity basics",
              "PWA"
            ].map((tag) => (
              <span key={tag} className="about__tag">
                {tag}
              </span>
            ))}
          </div>

          
<div className="about__toolkit">
  <span className="about__toolkit-comment">{'< toolkit/>'}</span>
  <div className="about__toolkit-groups">
   {[
  {
    key: "ui",
    label: "UI/UX",
    items: ["react-toastify", "react-loading-skeleton", "lucide-react", "React-swiper"],
  },
  {
    key: "integrations",
    label: "Integrations",
    items: ["EmailJS", "Clipboard API", "FileReader API", "Cloudinary", "Alpha Vantage API"],
  },
  {
    key: "advanced",
    label: "Advanced",
    items: ["Web Speech API", "Vite PWA", "jsPDF", "HTML5 Drag and Drop API", "Firebase Auth", "Firestore"],
  },
  {
    key: "viz",
    label: "Visualization",
    items: ["Chart.js"],
  },
  {
    key: "backend",
    label: "Backend & Storage",
    items: ["Firebase", "Firestore", "Cloudinary"],
  },
].map(({ key, label, items }) => (
      <div key={key} className="about__toolkit-row">
        <span className="about__toolkit-key">{label}</span>
        <span className="about__toolkit-colon">:</span>
        <span className="about__toolkit-bracket">[</span>
        {items.map((item, i) => (
          <span key={item}>
            <span className="about__toolkit-item">"{item}"</span>
            {i < items.length - 1 && (
              <span className="about__toolkit-comma">, </span>
            )}
          </span>
        ))}
        <span className="about__toolkit-bracket">]</span>
      </div>
    ))}
  </div>
</div>


          <div className="about__meta">
            {[
              { label: "education", value: "BSC- Computer Science" },
              { label: "role", value: "React Developer" },
            ].map(({ label, value }) => (
              <div key={label} className="about__meta-item">
                <span className="about__meta-label">{label}:</span>
                <span className="about__meta-value">"{value}"</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
