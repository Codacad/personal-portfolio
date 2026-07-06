import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCheck, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWebflow } from "@fortawesome/free-brands-svg-icons";

const linkTypes = [
  { key: "live_url", label: "Live", icon: faWebflow },
  { key: "gh_url", label: "Code", icon: faGithub },
  { key: "url", label: "Challenge", icon: faDev },
];

const Project = ({ project }) => {
  const links = linkTypes.filter((link) => project[link.key]);

  return (
    <article className="interactive-card glass-panel group flex h-full flex-col overflow-hidden rounded-3xl">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        {project.ui_img ? (
          <img
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            src={project.ui_img}
            alt={`${project.name} preview`}
          />
        ) : (
          <div className="project-image-placeholder grid h-full w-full place-items-center">
            <FontAwesomeIcon className="text-4xl text-blue-700" icon={faCodeBranch} />
          </div>
        )}
        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-black ${
              project.status === "Completed"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            <FontAwesomeIcon className="mr-1" icon={faCheck} />
            {project.status || "Completed"}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-700">
            {project.level}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech, index) => (
            <span
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-black leading-tight text-slate-950">{project.name}</h3>
          <span className="mt-2 block text-sm font-medium text-slate-500">
            {project.suggestedBy} project
          </span>
        </div>

        <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.key}
              className="secondary-button min-h-10 px-4 text-sm"
              href={project[link.key]}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={link.icon} />
              {link.label}
              <FontAwesomeIcon className="text-xs" icon={faArrowUpRightFromSquare} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;
