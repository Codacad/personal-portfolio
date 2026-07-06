import { Link } from "react-router-dom";
import { motion } from "motion/react";
import MyPic from "../assets/myphoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDev, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCloud,
  faCodeBranch,
  faDownload,
  faGraduationCap,
  faKey,
  faLocationDot,
  faServer,
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
  { skill: "Redis", frequency: 58 },
  { skill: "RESTful APIs", frequency: 80 },
  { skill: "JWT Auth", frequency: 74 },
  { skill: "Deployment", frequency: 76 },
];

const cloudWorkflowSkillList = [
  { skill: "AWS SAA-C03", frequency: 52 },
  { skill: "EC2 Instances", frequency: 64 },
  { skill: "Monorepo Structure", frequency: 68 },
  { skill: "PNPM Workspaces", frequency: 62 },
  { skill: "CI/CD", frequency: 60 },
];

const profileFocus = [
  { label: "Learning", value: "AWS SAA-C03", icon: faCloud },
  { label: "Cloud", value: "EC2 instances", icon: faServer },
  { label: "Architecture", value: "Monorepos", icon: faCodeBranch },
  { label: "Auth", value: "JWT flows", icon: faKey },
];

const timeline = [
  {
    type: "Cloud Learning",
    icon: faCloud,
    period: "2026",
    title: "AWS Solutions Architect Associate Preparation",
    subtitle: "AWS SAA-C03 course",
    detail:
      "Currently building cloud fundamentals with hands-on learning around EC2 instances, core AWS services, deployment thinking, and architecture patterns.",
  },
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

          <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/70 p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
              Current Growth
            </p>
            <h2 className="mt-2 text-lg font-black text-slate-950">
              Cloud, architecture, and delivery tools
            </h2>
            <div className="mt-4 grid gap-3">
              {profileFocus.map((item) => (
                <div key={item.value} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span>
                    <span className="block text-xs font-bold text-slate-400">
                      {item.label}
                    </span>
                    <strong className="block text-sm text-slate-800">{item.value}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-3xl bg-slate-950 p-4 text-white">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">
              Also Working With
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Redis", "PNPM", "JWT", "CI/CD", "Monorepo"].map((tool) => (
                <span key={tool} className="rounded-full bg-white/10 px-3 py-2 text-xs font-black">
                  {tool}
                </span>
              ))}
            </div>
          </div>
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
              responsive design, authentication, REST APIs, Redis, JWT, CI/CD,
              PNPM workflows, monorepo structures, and AWS fundamentals.
            </p>
          </section>

          <section className="grid gap-5 xl:grid-cols-3">
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
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="mb-6 text-2xl font-black text-slate-950">
                Cloud & Workflow
              </h3>
              <div className="space-y-5">
                {cloudWorkflowSkillList.map((item) => (
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
