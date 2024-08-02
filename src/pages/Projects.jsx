import React, { useEffect, useState } from "react";
import { projectData } from "../utils/projects";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import Project from "../components/Project";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const difficultyLevels = ["Basic", "Intermediate", "Advance"];
const sortProjects = (projects, option) => {
  switch (option) {
    case "latest":
      return [...projects].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    case "basicToAdvance":
      return [...projects].sort(
        (a, b) =>
          difficultyLevels.indexOf(a.level) - difficultyLevels.indexOf(b.level)
      );
    case "advanceToBasic":
      return [...projects].sort(
        (a, b) =>
          difficultyLevels.indexOf(b.level) - difficultyLevels.indexOf(a.level)
      );
    default:
      return projects;
  }
};

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [sortOption, setSortOption] = useState("latest");

  useEffect(() => {
    // Initial sorting of projects when component mounts
    setProjects(sortProjects(projects, "latest"));
  }, []);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    setProjects(sortProjects(projects, selectedOption));
  };

  return (
    <>
      <div className="bg-[#f4ece6] w-[100%]">
        <div className="projects relative md:w-[80%] m-auto md:py-8 p-4">
          <div className="header mb-8 max-md:mt-4 flex justify-between items-end">
            <div className="heading">
              <h3 className="flex items-center mb-2">
                <span className="md:w-4 w-2 h-[2px] bg-blue-700 md:mr-2 mr-[5px]"></span>
                <span className="md:text-xl text-[12px] text-gray-500">
                  Projects
                </span>
              </h3>
              <h1 className="md:text-4xl text-xl text-blue-700 font-[600]">
                My <span className="">Latest</span>{" "}
                <span className="">Projects</span>
              </h1>
            </div>
            <div className="view-all invisible ring-blue-700 ring-1 shadow-xl bg-transparent rounded-3xl flex gap-2 pl-[5px] items-center">
              <span className="p-2 w-8 h-8 max-sm:w-6 max-sm:h-6 max-sm:p-[5px] flex justify-center items-center bg-blue-700 rounded-full text-white">
                <FontAwesomeIcon
                  className="max-sm:text-[10px]"
                  icon={faHandPointRight}
                />
              </span>
              <Link
                className="bg-blue-700 text-white py-[10px] max-sm:py-[5px] px-4 rounded-3xl text-sm max-sm:text-[10px]"
                to={"/projects"}
              >
                View All Projects
              </Link>
            </div>
          </div>
          <div className="sort relative flex justify-end mb-8">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-800 appearance-none w-[200px] outline-none text-gray-600 text-[18px] bg-gray-100 py-1 px-4"
            >
              <option value="latest">Latest</option>
              <option value="basicToAdvance">Basic To Advance</option>
              <option value="advanceToBasic">Advance to Basic</option>
            </select>
            <div className="icon absolute right-6 top-2">
              <span>
                <FontAwesomeIcon className="text-gray-600" icon={faCaretDown} />
              </span>
            </div>
          </div>

          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
