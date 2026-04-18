import { Link } from "react-router-dom";
import Intro from "../component/intro";
import Contact from "./contact";
import "./css/home.css";
import Projects from "./projects";


export default function Home() {
  return (
    <>
      <div className="home__grid">
        <div className="home__left">
          <p className="home__greeting">Hello,</p>
          <h1 className="home__name">Mayur Panchal</h1>
          <p className="home__title"> React Developer</p>
          <div className="home__btn-group">
            <Link
              to="/contact"
              className="home__resume-btn home__resume-btn--outline"
            >
              contact me
            </Link>
            <Link 
            to="/resume.pdf"
            target="_blank"
  rel="noreferrer"
  className="home__resume-btn home__resume-btn--outline"
>
  view Resume
</Link>
<a 
href="/resume.pdf"
  download="Mayur_Panchal_Resume.pdf"
  className="home__resume-btn home__resume-btn--filled"
>
  download Resume
</a>
          </div>
        </div>

        <div className="home__right">
          <div className="home__card">
            <div className="home__card-line">
              <div className="home__card-line--left" />
              <div className="home__card-line--right" />
            </div>
            <div className="home__card-dots">
              <div className="home__dot home__dot--red" />
              <div className="home__dot home__dot--orange" />
              <div className="home__dot home__dot--green" />
              <span className="home__card-filename">coder.js</span>
            </div>
            <div className="home__card-code">
              <code className="home__code">
                <div className="blink">
                  <span className="c-keyword">const</span>
                  <span className="c-var"> coder</span>
                  <span className="c-keyword"> =</span>
                  <span className="c-gray"> {"{"}</span>
                </div>
                <div>
                  <span className="c-indent c-white">name:</span>
                  <span className="c-gray"> '</span>
                  <span className="c-value">Mayur Panchal</span>
                  <span className="c-gray">',</span>
                </div>
                <div className="c-indent">
                  <span className="c-white">skills:</span>
                  <span className="c-gray"> ['</span>
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
                    "Email.js",
                    "Networking",
                    "Cybersecurity basics",
                    "PWA integration",
                    "LocalStorage inetgration"
                  ].map((s, i, arr) => (
                    <span key={s}>
                      <span className="c-value">{s}</span>
                      {i < arr.length - 1 && (
                        <span className="c-gray">{"', '"}</span>
                      )}
                    </span>
                  ))}
                  <span className="c-gray">{"'],"}</span>
                </div>
                <div>
                  <span className="c-indent c-white">hardWorker:</span>
                  <span className="c-bool"> true</span>
                  <span className="c-gray">,</span>
                </div>
                <div>
                  <span className="c-indent c-white">quickLearner:</span>
                  <span className="c-bool"> true</span>
                  <span className="c-gray">,</span>
                </div>
                <div>
                  <span className="c-indent c-white">problemSolver:</span>
                  <span className="c-bool"> true</span>
                  <span className="c-gray">,</span>
                </div>
                <div>
                  <span className="c-indent c-green">hireable:</span>
                  <span className="c-bool"> function</span>
                  <span className="c-gray">{" () {"}</span>
                </div>
                <div>
                  <span className="c-indent2 c-bool">return</span>
                  <span className="c-gray"> {"("}</span>
                </div>
                <div>
                  <span className="c-indent3 c-cyan">this.</span>
                  <span className="c-white">hardWorker</span>
                  <span className="c-value"> &amp;&amp;</span>
                </div>
                <div>
                  <span className="c-indent3 c-cyan">this.</span>
                  <span className="c-white">problemSolver</span>
                  <span className="c-value"> &amp;&amp;</span>
                </div>
                <div>
                  <span className="c-indent3 c-cyan">this.</span>
                  <span className="c-white">skills.length</span>
                  <span className="c-value"> &gt;=</span>
                  <span className="c-bool"> 5</span>
                </div>
                <div>
                  <span className="c-indent2 c-gray">{");"}</span>
                </div>
                <div>
                  <span className="c-indent c-gray">{"}"}</span>
                </div>
                <div>
                  <span className="c-gray">{"};"}</span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>

      <Intro />
      <Projects />
      <Contact />
    </>
  );
}
