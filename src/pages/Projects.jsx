import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFilter,
  faLayerGroup,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import Project from "../components/Project";
import { projectData } from "../utils/projects";

const difficultyLevels = ["Basic", "Intermediate", "Advance"];
const filters = ["All", "Client", "Self Suggested", "Frontend Mentor"];

const sortProjects = (projects, option) => {
  switch (option) {
    case "latest":
      return [...projects].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      );
    case "basicToAdvance":
      return [...projects].sort(
        (a, b) =>
          difficultyLevels.indexOf(a.level) - difficultyLevels.indexOf(b.level),
      );
    case "advanceToBasic":
      return [...projects].sort(
        (a, b) =>
          difficultyLevels.indexOf(b.level) - difficultyLevels.indexOf(a.level),
      );
    default:
      return projects;
  }
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [sortOption, setSortOption] = useState("latest");

  const projects = useMemo(() => {
    const filtered =
      filter === "All"
        ? projectData
        : projectData.filter((project) => project.suggestedBy === filter);

    return sortProjects(filtered, sortOption);
  }, [filter, sortOption]);

  const featuredProjects = projectData.filter((project) =>
    [
      "Quran Scholars",
      "Nujum Al Miad Contracting Est. (NMC)",
      "Interactive Quiz App",
    ].includes(project.name),
  );

  return (
    <div className="page">
      <section className="grid gap-8 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="section-eyebrow">Selected Work</div>
          <h1 className="text-5xl font-black leading-tight text-slate-950 sm:text-6xl">
            Projects with real screens, real links, and real learning.
          </h1>
        </motion.div>
        <div className="glass-panel rounded-3xl p-6">
          <p className="leading-8 text-slate-600">
            This collection mixes client work, self-built MERN projects, and
            Frontend Mentor challenges. The focus is simple: build clean UIs,
            ship working features, and keep improving the craft.
          </p>
          <Link className="primary-button mt-6 w-fit" to="/contact">
            Discuss a Build <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      <section className="section-gap">
        <div className="mb-6 flex items-center gap-3">
          <FontAwesomeIcon className="text-blue-600" icon={faLayerGroup} />
          <h2 className="text-2xl font-black text-slate-950">Featured Builds</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="glass-panel mb-6 flex flex-col gap-4 rounded-3xl p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-2 px-2 text-sm font-black text-slate-500">
              <FontAwesomeIcon icon={faFilter} />
              Filter
            </span>
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm font-black transition ${
                  filter === item
                    ? "bg-blue-600 text-white"
                    : "bg-white/70 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="relative flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm font-black text-slate-600">
            <FontAwesomeIcon icon={faSort} />
            <select
              value={sortOption}
              onChange={(event) => setSortOption(event.target.value)}
              className="bg-transparent outline-none"
            >
              <option value="latest">Latest first</option>
              <option value="basicToAdvance">Basic to advanced</option>
              <option value="advanceToBasic">Advanced to basic</option>
            </select>
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
