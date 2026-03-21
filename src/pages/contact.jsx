import { useState } from "react";
import "./css/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    const SERVICE_ID         = "service_v9n60nm";
    const TEMPLATE_NOTIFY    =  "template_inofjdi";     
    const TEMPLATE_AUTOREPLY =    "template_5cyr7rq"; 
    const PUBLIC_KEY         = "ilW_BgWHqMpdJPbHo";

    const params = {
      from_name:  form.name,
      from_email: form.email,
      message:    form.message,
      to_name:    "Mayur",
    };

    const send = (templateId) =>
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:      SERVICE_ID,
          template_id:     templateId,
          user_id:         PUBLIC_KEY,
          template_params: params,
        }),
      });

    Promise.all([send(TEMPLATE_NOTIFY), send(TEMPLATE_AUTOREPLY)])
      .then(([r1, r2]) => {
        if (r1.ok && r2.ok) {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section className="contact">

      <div className="section__heading">
        <div className="section__line--left" />
        <div className="section__line--right" />
        <h2 className="section__title">get<span className="section__dot">.</span>inTouch</h2>
      </div>

      <div className="contact__wrapper">

        {/* Left — info */}
        <div className="contact__info">
          <p className="contact__intro">
            <span className="c-keyword">if</span>
            <span className="c-gray">(</span>
            <span className="c-value">opportunity</span>
            <span className="c-gray">)</span>
            <span className="c-keyword"> reach</span>
            <span className="c-gray">(</span>
            <span className="c-value">'me'</span>
            <span className="c-gray">)</span>
          </p>
          <p className="contact__subtext">
            I'm always open to discussing new projects, creative ideas, or opportunities.
            Drop a message and I'll get back to you soon.
          </p>
          <div className="contact__links">
            {[
              { label: "email",    value: "panchalmayur2004@gmail.com",       href: "mailto:panchalmayur2004@gmail.com" },
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
].map(({ label, value, href }) => (
             
              <a
  key={label}
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className="contact__link"
></a>
            ))}
          </div>
        </div>

        {/* Right — email form */}
        <div className="contact__form-card">
          <div className="contact__form-line">
            <div className="contact__form-line--left" />
            <div className="contact__form-line--right" />
          </div>
          <div className="contact__form-dots">
            <div className="contact__dot contact__dot--red" />
            <div className="contact__dot contact__dot--orange" />
            <div className="contact__dot contact__dot--green" />
            <span className="contact__form-filename">sendMessage.js</span>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label">
                <span className="c-key">name</span>
                <span className="c-gray">:</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact__input"
                placeholder="'your name'"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">
                <span className="c-key">email</span>
                <span className="c-gray">:</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="contact__input"
                placeholder="'your@email.com'"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">
                <span className="c-key">message</span>
                <span className="c-gray">:</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="contact__input contact__textarea"
                placeholder="'your message here...'"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <span className="c-keyword">sending</span>
                  <span className="c-gray">(</span>
                  <span className="c-value">'...'</span>
                  <span className="c-gray">)</span>
                </>
              ) : (
                <>
                  <span className="c-fn">send</span>
                  <span className="c-gray">(</span>
                  <span className="c-value">'message'</span>
                  <span className="c-gray">)</span>
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="contact__feedback contact__feedback--success">
                <span className="c-bool">✓ </span>
                <span className="c-value">message sent successfully!</span>
              </p>
            )}
            {status === "error" && (
              <p className="contact__feedback contact__feedback--error">
                <span className="c-pink">✗ </span>
                <span className="c-gray">something went wrong. try email directly.</span>
              </p>
            )}
          </form>

        </div>
      </div>

    </section>
  );
}