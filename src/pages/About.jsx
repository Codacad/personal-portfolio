import { Link } from "react-router-dom";
import MyPic from "../assets/myphoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
import {
  faArrowRight,
  faBolt,
  faCode,
  faDatabase,
  faLayerGroup,
  faLocationDot,
  faRocket,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/codacad/", icon: faLinkedin },
  { label: "GitHub", href: "https://github.com/Codacad", icon: faGithub },
  { label: "Frontend Mentor", href: "https://www.frontendmentor.io/profile/Codacad", icon: faDev },
];

const capabilities = [
  {
    icon: faLayerGroup,
    title: "Interface Engineering",
    text: "Responsive React experiences with clean component structure, accessible states, and polished interaction details.",
  },
  {
    icon: faDatabase,
    title: "Backend Systems",
    text: "Node, Express, MongoDB, auth flows, and practical APIs that are built to survive real users.",
  },
  {
    icon: faShieldHalved,
    title: "Delivery Mindset",
    text: "Version control, deployment, bug fixing, and communication that keep projects moving without drama.",
  },
];

const stack = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "GitHub",
];

const stats = [
  { value: "7+", label: "Years building" },
  { value: "17", label: "Featured projects" },
  { value: "MERN", label: "Core stack" },
];

const About = () => {
  return (
    <div className="page">
      <section className="grid items-center gap-10 pt-8 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-8"
        >
          <div className="section-eyebrow">Portfolio</div>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
              I build useful web products with{" "}
              <span className="gradient-text">sharp frontend craft</span> and
              reliable backend thinking.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              I am Mohd Rizwan, a fullstack developer focused on MERN stack
              applications, responsive interfaces, and practical systems that
              feel smooth to use and straightforward to maintain.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="primary-button" to="/projects">
              View Work <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link className="secondary-button" to="/resume">
              Explore Resume
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-3xl p-5">
                <strong className="block text-3xl font-black text-slate-950">
                  {stat.value}
                </strong>
                <span className="text-sm font-medium text-slate-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="glass-panel noise-panel mx-auto w-full max-w-[620px] rounded-[2rem] p-3 sm:p-5 lg:mx-0"
        >
          <div className="relative z-10 overflow-hidden rounded-[1.5rem] bg-slate-950 text-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                available_for_work.js
              </span>
            </div>

            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[320px] md:min-h-[460px]">
                <img
                  src={MyPic}
                  alt="Mohd Rizwan"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent p-5">
                  <span className="inline-flex items-center rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-emerald-950">
                    Open to work
                  </span>
                </div>
              </div>

              <div className="flex min-h-[360px] flex-col justify-between p-5 sm:p-6">
                <div>
                  <p className="text-sm text-slate-400">const developer =</p>
                  <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">
                    Mohd Rizwan
                  </h2>
                  <p className="mt-4 leading-7 text-slate-300">
                    MERN stack developer turning ideas into clean, responsive,
                    production-ready web experiences.
                  </p>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="grid gap-3 text-sm">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/7 px-4 py-3">
                      <FontAwesomeIcon className="text-blue-300" icon={faLocationDot} />
                      <span>Saudi Arabia / Remote</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/7 px-4 py-3">
                      <FontAwesomeIcon className="text-blue-300" icon={faRocket} />
                      <span>Frontend, backend, APIs, deployment</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stack.slice(0, 6).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </section>

      <section className="section-gap">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="section-eyebrow">What I Do</div>
            <h2 className="mt-3 max-w-2xl text-3xl font-black text-slate-950 sm:text-4xl">
              Practical engineering with enough polish to make people stay.
            </h2>
          </div>
          <Link className="secondary-button w-fit" to="/contact">
            Start Conversation
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((capability) => (
            <motion.article
              key={capability.title}
              whileHover={{ y: -6 }}
              className="interactive-card glass-panel rounded-3xl p-6"
            >
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white">
                <FontAwesomeIcon icon={capability.icon} />
              </div>
              <h3 className="text-xl font-black text-slate-950">{capability.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{capability.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-gap grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel rounded-3xl p-6">
          <div className="section-eyebrow">Stack</div>
          <h2 className="mt-3 text-3xl font-black text-slate-950">
            Tools I reach for often.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            I keep the stack modern but familiar, so projects can be shipped,
            handed over, extended, and debugged without unnecessary magic.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stack.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
              className="glass-panel rounded-2xl p-4 text-center text-sm font-black text-slate-700"
            >
              <FontAwesomeIcon className="mb-3 text-blue-600" icon={index % 2 ? faCode : faBolt} />
              <span className="block">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-gap glass-panel rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="section-eyebrow">Next Step</div>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Have an idea, product, or broken interface that needs attention?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Send the context. I can help shape the UI, build the frontend,
              wire the backend, or improve the existing codebase.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="primary-button" href="mailto:iam@rizwanansari.in">
              Email Me <FontAwesomeIcon icon={faRocket} />
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="icon-button"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
