import { Link } from "react-router-dom";
import { motion } from "motion/react";
import MyPic from "../assets/myphoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDev, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faDownload,
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const frontendSkillList = [
  { skill: "ReactJS", frequency: 78 },
  { skill: "JavaScript", frequency: 84 },
  { skill: "HTML", frequency: 92 },
  { skill: "CSS / Tailwind", frequency: 86 },
  { skill: "Responsive UI", frequency: 88 },
];

const backendSkillList = [
  { skill: "NodeJS", frequency: 78 },
  { skill: "Express", frequency: 82 },
  { skill: "MongoDB", frequency: 72 },
  { skill: "RESTful APIs", frequency: 80 },
  { skill: "Deployment", frequency: 76 },
];

const timeline = [
  {
    type: "Experience",
    icon: faBriefcase,
    period: "2019 - Present",
    title: "Fullstack Developer",
    subtitle: "Freelance and client projects",
    detail:
      "React interfaces, Node/Express APIs, MongoDB integrations, deployments, and practical product iteration.",
  },
  {
    type: "Learning",
    icon: faGraduationCap,
    period: "2017 - Present",
    title: "Fullstack Web Development",
    subtitle: "Self-paced study and production practice",
    detail:
      "Continuous learning across frontend craft, backend systems, computer science basics, and modern deployment workflows.",
  },
  {
    type: "Education",
    icon: faGraduationCap,
    period: "2015",
    title: "BCA, Computer Application",
    subtitle: "Teerthankar Mahaveer University",
    detail: "Specialization in computer science and technology.",
  },
  {
    type: "Education",
    icon: faGraduationCap,
    period: "2018",
    title: "B.Com",
    subtitle: "Ahilyabai Holkar Mahavidhalya",
    detail: "Commerce degree adding business and operational context to technical work.",
  },
];

const SkillBar = ({ item }) => (
  <div>
    <div className="mb-2 flex justify-between text-sm font-bold text-slate-700">
      <span>{item.skill}</span>
      <span>{item.frequency}%</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${item.frequency}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="h-full rounded-full bg-blue-600"
      />
    </div>
  </div>
);

const Resume = () => {
  return (
    <div className="page">
      <section className="grid gap-6 pt-8 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="glass-panel h-fit rounded-[2rem] p-6 lg:sticky lg:top-28">
          <img
            className="h-36 w-36 rounded-3xl object-cover object-top shadow-xl shadow-slate-900/10"
            src={MyPic}
            alt="Mohd Rizwan"
          />
          <h1 className="mt-6 text-4xl font-black text-slate-950">Mohd Rizwan</h1>
          <p className="mt-2 font-semibold text-blue-700">Fullstack Developer</p>
          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500">
            <FontAwesomeIcon icon={faLocationDot} />
            Saudi Arabia / Remote
          </p>
          <div className="mt-6 flex gap-3">
            <a
              className="icon-button"
              href="https://www.linkedin.com/in/codacad/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="icon-button"
              href="https://github.com/Codacad"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="icon-button"
              href="https://www.frontendmentor.io/profile/Codacad"
              target="_blank"
              rel="noreferrer"
              aria-label="Frontend Mentor"
            >
              <FontAwesomeIcon icon={faDev} />
            </a>
          </div>
          <a className="primary-button mt-6 w-full" href="/cv.pdf" download>
            <FontAwesomeIcon icon={faDownload} />
            Download CV
          </a>
        </aside>

        <div className="space-y-8">
          <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="section-eyebrow">Resume</div>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Developer profile built around shipping usable products.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Experienced frontend and fullstack developer with hands-on work in
              React, JavaScript, Node.js, Express, MongoDB, Tailwind CSS, Git,
              responsive design, authentication, REST APIs, and deployment.
            </p>
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="mb-6 text-2xl font-black text-slate-950">Frontend</h3>
              <div className="space-y-5">
                {frontendSkillList.map((item) => (
                  <SkillBar key={item.skill} item={item} />
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="mb-6 text-2xl font-black text-slate-950">Backend</h3>
              <div className="space-y-5">
                {backendSkillList.map((item) => (
                  <SkillBar key={item.skill} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="section-eyebrow">Path</div>
                <h3 className="mt-3 text-3xl font-black text-slate-950">
                  Experience and education
                </h3>
              </div>
              <Link className="secondary-button hidden sm:inline-flex" to="/projects">
                See Projects
              </Link>
            </div>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.article
                  key={`${item.period}-${item.title}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="grid gap-4 rounded-3xl border border-slate-200/70 bg-white/70 p-5 md:grid-cols-[150px_1fr]"
                >
                  <div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                      {item.period}
                    </span>
                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-500">
                      <FontAwesomeIcon icon={item.icon} />
                      {item.type}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-950">{item.title}</h4>
                    <p className="mt-1 font-semibold text-slate-500">{item.subtitle}</p>
                    <p className="mt-3 leading-7 text-slate-600">{item.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Resume;
