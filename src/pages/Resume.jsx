import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDev,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FrontendSkills from "../components/subcomponents/FrontendSkills";
import BackendSkills from "../components/subcomponents/BackendSkills";
const Resume = () => {
  const [frontendSkillList, setFrontendSkillList] = useState([
    { srno: 1, skill: "ReactJS", frequency: 70 },
    { srno: 2, skill: "JavaScript", frequency: 80 },
    { srno: 3, skill: "HTML", frequency: 90 },
    { srno: 4, skill: "CSS", frequency: 85 },
    { srno: 5, skill: "Tailwid CSS", frequency: 65 },
    { srno: 6, skill: "SASS", frequency: 75 },
    { srno: 7, skill: "Responsive Design", frequency: 80 },
  ]);
  const [backendSkillList, setBackendSkillList] = useState([
    { srno: 1, skill: "NodeJS", frequency: 75 },
    { srno: 2, skill: "Express", frequency: 80 },
    { srno: 3, skill: "MongoDB", frequency: 65 },
    { srno: 4, skill: "Mongoose", frequency: 85 },
    { srno: 5, skill: "Git/Github", frequency: 65 },
    { srno: 6, skill: "RESTful APIs", frequency: 75 },
    { srno: 7, skill: "Deployment", frequency: 80 },
  ]);
  return (
    <>
      <div className="w-[100%] bg-gray-100 resume-container p-12 max-md:p-4 max-sm:p-2 relative">
        <div className="content min-h-[100vh] p-4 pt-8 relative before:-content-[''] before:absolute before:top-0 before:left-0 before:w-[100px] before:h-[100px] max-md:before:w-[20px] max-md:before:h-[20px] before:border-l-4 max-md:before:border-l-3 max-md:before:border-t-3 before:border-t-4 before:border-blue-700 after:-content-[''] after:absolute after:top-0 after:right-0 after:w-[100px]  max-md:after:w-[20px] after:h-[100px] max-md:after:h-[20px] after:border-r-4 after:border-t-4 max-md:after:border-t-3 max-md:after:border-r-3 after:border-blue-700">
          <div className="header flex justify-center">
            <h1 className="text-4xl max-md:text-2xl relative text-gray-700 flex font-bold items-center uppercase after:content-[''] after:absolute after:-bottom-4 after:w-[100%] after:bg-blue-700">
              {/* <span className="w-[28px] h-[28px] mt-1 bg-blue-700 mr-2 block"></span> */}
              <span>Mohd Rizwan</span>
            </h1>
          </div>
          <div className="contact flex flex-col pt-8 gap-4 items-center justify-center">
            <div className="contact-social">
              <ul className="flex gap-4">
                <li>
                  <Link
                    to={"https://www.linkedin.com/in/codacad/"}
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://github.com/Codacad"}
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://www.frontendmentor.io/profile/Codacad"}
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    <FontAwesomeIcon icon={faDev} />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://www.facebook.com/rizcodi"}
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume grid max-md:block grid-cols-3 mt-20 gap-6">
            <div className="summary col-span-3">
              <div className="title mb-4 flex flex-col">
                <h1 className="text-xl flex justify-between items-center text-gray-700 font-bold border-l-4 pl-2 border-blue-700">
                  <span>Professional Summary:</span>
                  <Link
                    to={""}
                    download={""}
                    className="text-sm rounded-md font-poppins shadow-md font-[300] transition-background duration-200 bg-blue-700 hover:bg-blue-800 text-white border-2 border-blue-700 p-2 max-sm:p-1 max-sm:px-2 px-4"
                  >
                    <FontAwesomeIcon icon={faDownload} className="mr-1" />{" "}
                    <span className="max-md:hidden">Download</span> CV
                  </Link>
                </h1>
                <span className="mt-4 max-md:mt-1 max-sm:text-sm max-sm:bg-transparent max-sm:text-gray-500 bg-blue-700 w-[170px] max-sm:w-[140px] text-white p-1 box-border text-center">
                  <span>Fullstack Developer</span>
                </span>
              </div>
              <p className="max-sm:text-sm leading-[28px] max-sm:leading-[30px] text-gray-600 font-madimi_one border-b-1 border-gray-300 pb-6">
                Experienced Frontend and Fullstack Developer with a proven track
                record of creating visually appealing and highly functional user
                interfaces using{" "}
                <Link
                  className="inlinetechlink"
                  to={"https://www.codecademy.com/catalog/language/html-css"}
                >
                  HTML/CSS
                </Link>
                ,{" "}
                <Link
                  className="inlinetechlink"
                  to={
                    "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
                  }
                >
                  JavaScript
                </Link>
                ,{" "}
                <Link
                  className="inlinetechlink"
                  to={"https://react.dev/"}
                ></Link>
                , and{" "}
                <Link className="inlinetechlink" to={"https://tailwindcss.com"}>
                  Tailwind CSS
                </Link>
                . Possessing in-depth knowledge of backend technologies such as
                Node.js, Express.js, MongoDB, and Mongoose, I excel in building
                robust server-side applications with a keen focus on security
                and scalability. Proficient in implementing authentication and
                authorization protocols to safeguard data integrity and user
                privacy. With a collaborative mindset and expertise in
                Git/GitHub for version control, I thrive in team environments,
                fostering effective communication and seamless project
                collaboration. Dedicated to delivering excellence in every
                aspect of development, I am driven by a passion for innovation
                and a commitment to continuous learning, ensuring I remain at
                the forefront of emerging technologies and industry best
                practices.
              </p>
            </div>
            <div className="education flex flex-col max-md:mt-4">
              <h1 className="border-l-4 mb-4 border-blue-700 pl-2 text-2xl font-[600]">
                Education
              </h1>
              <div className="course border-l-1 border-gray-200 pb-4 mt-4">
                <span className="bg-blue-700 px-2 py-1 text-sm font-[300] text-white mb-2 block w-12 text-right">
                  2015
                </span>
                <div className="course-name pl-4">
                  <h1 className="text-md font-[600] mt-4">
                    BCA (Bachelor in Computer Application)
                  </h1>
                  <span className="text-sm text-gray-400">
                    Teerthankar Mahaveer University, Moradabad, Uttar Pradesh
                    (India)
                  </span>
                  <div className="specialization">
                    <h2 className="text-sm text-gray-500 font-[400]">
                      <span className="font-bold">Specialization:</span>{" "}
                      Computer Science &amp; Technology
                    </h2>
                  </div>
                </div>
              </div>
              <div className="course border-l-1 border-gray-200 pb-4 mt-4">
                <span className="bg-blue-700 px-2 py-1 text-sm font-[300] text-white mb-2 block w-12 text-right">
                  2015
                </span>
                <div className="course-name pl-4">
                  <h1 className="text-md font-[600] mt-4">
                    DCA (Diploma in Computer Application)
                  </h1>
                  <span className="text-sm text-gray-400">
                    Deepak Saxena Institute of Education, Thakurdwara,
                    Moradabad, Uttar Pradesh (India)
                  </span>
                  <div className="specialization">
                    <h2 className="text-sm text-gray-500 font-[400]">
                      <span className="font-bold">Specialization:</span>{" "}
                      Computer Science &amp; Technology
                    </h2>
                  </div>
                </div>
              </div>
              <div className="course border-l-1 border-gray-200 pb-4 mt-4">
                <span className="bg-blue-700 px-2 py-1 text-sm font-[300] text-white mb-2 block w-28 text-right">
                  2017 - Present
                </span>
                <div className="course-name pl-4">
                  <h1 className="text-md font-[600] mt-4">
                    <span className="font-bold">Specialization:</span> Fullstack
                    Web Development & Computer Science
                  </h1>
                  <span className="text-md font-[400] text-gray-400">
                    Self-paced courses on YouTube in Fullstack Web Development
                    and Computer Science
                  </span>
                </div>
              </div>
              <div className="course border-l-1 border-gray-200 pb-4 mt-4">
                <span className="bg-blue-700 px-2 py-1 text-sm font-[300] text-white mb-2 block w-12 text-right">
                  2018
                </span>
                <div className="course-name pl-4">
                  <h1 className="text-md font-[600] mt-4">
                    B.COM (Bachelor in Commerce)
                  </h1>
                  <span className="text-sm text-gray-400">
                    Ahilyabai Holkar Mahavidhalya, Thakurdwara, Uttar Pradesh
                    (India)
                  </span>
                </div>
              </div>
            </div>
            <div className="experience flex flex-col">
              <h1 className="border-l-4 mb-4 border-blue-700 pl-2 text-2xl font-[600]">
                Experience
              </h1>
              <div className="course border-l-1 border-gray-200 pb-4 mt-4">
                <span className="bg-blue-700 px-2 py-1 text-sm font-[300] text-white mb-2 block w-28 text-right">
                  2019 - Present
                </span>
                <div className="course-name pl-4">
                  <h1 className="text-md font-[600] mt-4">
                    Frontend Developer
                  </h1>
                  <span className="text-sm text-gray-400">Freelancer</span>
                  <div className="specialization">
                    <h2 className="text-sm text-gray-500 font-[400]">
                      <span className="font-bold">Specialization:</span>{" "}
                      ReactJS, JavaScript, HTML/CSS, TailwindCSS, etc.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="course border-l-1 border-gray-200 pb-4 mt-4">
                <span className="bg-blue-700 px-2 py-1 text-sm font-[300] text-white mb-2 block w-28 text-right">
                  2019 - Present
                </span>
                <div className="course-name pl-4">
                  <h1 className="text-md font-[600] mt-4">Backend Developer</h1>
                  <span className="text-sm text-gray-400">Freelancer</span>
                  <div className="specialization">
                    <h2 className="text-sm text-gray-500 font-[400]">
                      <span className="font-bold">Specialization:</span> NodeJS,
                      ExpressJS, MongoDB, Mongoose, React.js / Node.js, etc.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="course border-l-1 border-gray-200 pb-4 mt-4">
                <span className="bg-blue-700 px-2 py-1 text-sm font-[300] text-white mb-2 block w-28 text-right">
                  2019 - Present
                </span>
                <div className="course-name pl-4">
                  <h1 className="text-md font-[600] mt-4">Web Designer</h1>
                  <span className="text-sm text-gray-400">Freelancer</span>
                  <div className="specialization">
                    <h2 className="text-sm text-gray-500 font-[400]">
                      <span className="font-bold">Specialization:</span> HTML,
                      CSS, SASS, JavaScript, Responsive Web Design, Web
                      Typography, etc.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="course border-l-1 border-gray-200 pb-4 mt-4">
                <span className="bg-blue-700 px-2 py-1 text-sm font-[300] text-white mb-2 block w-28 text-right">
                  2017 - Present
                </span>
                <div className="course-name pl-4">
                  <h1 className="text-md font-[600] mt-4">
                    <span className="font-bold">Specialization:</span> Fullstack
                    Web Development & Computer Science
                  </h1>
                  <span className="text-md font-[400] text-gray-400">
                    Self-paced courses on YouTube in Fullstack Web Development
                    and Computer Science
                  </span>
                </div>
              </div>
            </div>
            <div className="skills flex flex-col gap-4">
              <h1 className="border-l-4 mb-4 border-blue-700 pl-2 text-2xl font-[600]">
                Skills
              </h1>
              <div className="frontend-skills">
                <h3 className="mb-2 text-lg font-[600] ">Front End Skills:</h3>
                <div className="flex flex-col gap-2">
                  {frontendSkillList.map((skill, index) => {
                    return <FrontendSkills key={index} skill={skill} />;
                  })}
                </div>
              </div>
              <div className="backend-skills">
                <h3 className="mb-2 text-lg font-[600] pt-4">
                  Back End Skills:
                </h3>
                <div className="flex flex-col gap-2">
                  {backendSkillList.map((skill, index) => {
                    return <BackendSkills key={index} skill={skill} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
