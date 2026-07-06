import { useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mailto = `mailto:iam@rizwanansari.in?subject=${encodeURIComponent(
    `Portfolio inquiry from ${form.name || "a visitor"}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
  )}`;

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <div className="page">
      <section className="grid gap-8 pt-8 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="section-eyebrow">Contact</div>
          <h1 className="text-5xl font-black leading-tight text-slate-950 sm:text-6xl">
            Let us turn a useful idea into a clean web product.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Share the goal, current stage, and what you need help with. I will
            respond with a practical next step.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <a className="glass-panel interactive-card rounded-3xl p-5" href="mailto:iam@rizwanansari.in">
              <FontAwesomeIcon className="text-blue-600" icon={faEnvelope} />
              <span className="mt-4 block text-sm font-black text-slate-500">Email</span>
              <strong className="mt-1 block break-all text-slate-950">
                iam@rizwanansari.in
              </strong>
            </a>
            <a className="glass-panel interactive-card rounded-3xl p-5" href="tel:+966536317438">
              <FontAwesomeIcon className="text-blue-600" icon={faPhone} />
              <span className="mt-4 block text-sm font-black text-slate-500">Call</span>
              <strong className="mt-1 block text-slate-950">+966 536 317 438</strong>
            </a>
            <div className="glass-panel rounded-3xl p-5">
              <FontAwesomeIcon className="text-blue-600" icon={faLocationDot} />
              <span className="mt-4 block text-sm font-black text-slate-500">Location</span>
              <strong className="mt-1 block text-slate-950">Saudi Arabia / Remote</strong>
            </div>
            <div className="glass-panel rounded-3xl p-5">
              <FontAwesomeIcon className="text-blue-600" icon={faRocket} />
              <span className="mt-4 block text-sm font-black text-slate-500">Availability</span>
              <strong className="mt-1 block text-slate-950">Open to projects</strong>
            </div>
          </div>
        </motion.div>

        <form
          className="glass-panel rounded-[2rem] p-5 sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = mailto;
          }}
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-600">Name</span>
              <input
                className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Your name"
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-600">Email</span>
              <input
                className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-600">Project details</span>
              <textarea
                className="min-h-44 resize-y rounded-2xl border border-slate-200 bg-white/75 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Tell me what you want to build or improve..."
                required
              />
            </label>
            <button className="primary-button w-full" type="submit">
              Compose Email <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="secondary-button" href="https://github.com/Codacad" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
            <a className="secondary-button" href="https://www.linkedin.com/in/codacad/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
