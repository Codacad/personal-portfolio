import React from "react";

const BackendSkills = ({skill}) => {
  return (
    <>
      <div className="skill flex flex-col gap-2">
        <h4>{skill.skill}</h4>
        <div className="content">
          <div className="progress-bar w-[100%] p-[1px] rounded-md border-1 shadow-inner border-gray-300">
            <span
              className={`progress block p-1 rounded-md bg-blue-800`}
              style={{ width: `${skill.frequency}%` }}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackendSkills;
