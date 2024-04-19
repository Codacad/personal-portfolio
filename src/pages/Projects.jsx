import React, { useState } from "react";
import { projects } from "../utils/projects";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import Project from "../components/Project";
const Projects = () => {
  return (
    <>
      <div className="bg-gray-100 w-[100%]">
        <div className="projects bg-gray-100 relative md:w-[80%] m-auto md:py-8 p-4">
          <div className="header mb-8 max-md:mt-4 flex justify-between items-end">
            <div className="heading">
              <h3 className="flex items-center mb-2">
                <span className="md:w-4 w-2 h-[2px] bg-blue-700 md:mr-2 mr-[5px]"></span>
                <span className="md:text-xl text-[12px] text-gray-500">Projects</span>
              </h3>
              <h1 className="md:text-4xl text-xl text-blue-700 font-[600]">
                My <spanc className="">Latest</spanc>{" "}
                <span className="">Projects</span>
              </h1>
            </div>
            <div className="view-all ring-blue-700 ring-1 shadow-xl bg-transparent rounded-3xl flex gap-2 pl-[5px] items-center">
              <span className="p-2 w-8 h-8 max-sm:w-6 max-sm:h-6 max-sm:p-[5px] flex justify-center items-center bg-blue-700 rounded-full text-white">
                <FontAwesomeIcon className="max-sm:text-[10px]" icon={faHandPointRight} />
              </span>
              <Link className="bg-blue-700 text-white py-[10px] max-sm:py-[5px] px-4 rounded-3xl text-sm max-sm:text-[10px]" to={"/projects"}>View All Projects</Link>
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
