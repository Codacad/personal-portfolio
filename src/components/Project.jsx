import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWebflow } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Project = ({ project }) => {
  return (
    <div className="bg-white p-2 mb-8 sm:grid grid-cols-2 rounded-3xl sm:h-96 md:hover:bg-gray-200">
      <div className="flex justify-between overflow-hidden items-center h-[100%]">
        <img
          className="w-[100%] h-[100%] object-cover object-top rounded-3xl"
          src={`${process.env.PUBLIC_URL}${project.ui_img}`}
          alt="Image"
        />
      </div>
      <div className="flex sm:p-8 max-sm:p-4 justify-between flex-col max-sm:gap-4">
        <div className="tages flex gap-2">
          {project.tech_stack.map((tech, index) => (
            <span
              className="sm:bg-[rgba(0,0,0,.051)] bg-blue-200 font-[600] rounded-2xl py-1 sm:text-sm text-[12px] text-blue-800 px-4"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="project-name">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <span className="suggested-by text-gray-400">
            A {project.suggestedBy} project
          </span>
        </div>
        <p>{project.description}</p>
        <div className="links flex text-[10px] gap-4">
          <Link
            target="_blank"
            className="text-gray-700 py-[5px] border-b-2 border-slate-500 flex items-center gap-2 md:hover:text-blue-700 md:hover:border-blue-700"
            to={`${project.url}`}
          >
            <FontAwesomeIcon className="text-[12px]" icon={faDev} />
            <span>Frontend Mentor</span>{" "}
            <FontAwesomeIcon
              className="text-[12px]"
              icon={faArrowUpRightFromSquare}
            />
          </Link>
          <Link
            target="_blank"
            className="text-gray-700 py-[5px] border-b-2 border-slate-500 flex items-center gap-2 md:hover:text-blue-700 md:hover:border-blue-700"
            to={`${project.gh_url}`}
          >
            <FontAwesomeIcon className="text-[12px]" icon={faGithub} />
            <span>Github Repo</span>{" "}
            <FontAwesomeIcon
              className="text-[12px]"
              icon={faArrowUpRightFromSquare}
            />
          </Link>
          <Link
            target="_blank"
            className="text-gray-700 py-[5px] border-b-2 border-slate-500 flex items-center gap-2 md:hover:text-blue-700 md:hover:border-blue-700"
            to={`${project.live_url}`}
          >
            <FontAwesomeIcon className="text-[12px]" icon={faWebflow} />
            <span>Live Preview</span>{" "}
            <FontAwesomeIcon
              className="text-[12px]"
              icon={faArrowUpRightFromSquare}
            />
          </Link>
        </div>
        <Link
          className="bg-blue-700 ml-auto w-30 flex items-center gap-2 text-center text-white py-[5px] px-4 rounded-3xl text-sm"
          to={"/projects"}
        >
          <span>View Details</span>
          <FontAwesomeIcon
            className="text-[12px]"
            icon={faArrowUpRightFromSquare}
          />
        </Link>
      </div>
    </div>
  );
};

export default Project;
