import { Link } from "react-router-dom";
import MyPic from "../assets/myphoto.jpg";
import "../css/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <>
      <motion.div className="about-me backdrop-blur-3xl md:p-12 relative w-[100%]">
        <div className="about-card backdrop-blur-3xl block w-[100%] md:w-[50%] md:flex">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            className="profile w-[100%] h-100% md:w-[50%] drop-shadow-sm rounded-md relative bg-[#f4ece6]"
          >
            <div className="content h-[400px] p-6 md:p-12 flex flex-col gap-12 items-center">
              <img
                src={MyPic}
                alt=""
                className="rounded-full w-[100px] md:w-[200px] md:h-[200px] h-[100px]"
              />
              <div className="name text-center font-poppins font-black text-2xl tracking-wide">
                Mohd Rizwan
              </div>
              <span className="divider w-12 p-[1px] poppins-black bg-blue-700"></span>
              <p className="job uppercase font-thin tracking-widest">
                Web Developer
              </p>
            </div>
            <div className="footer bg-glass rounded-b-md absolute  bottom-0 w-[100%] bg-white p-2 flex justify-center">
              <div className="social-medias w-[50%] flex justify-around md:gap-8">
                <Link
                  className="md:text-2xl hover:opacity-80"
                  to={"https://www.linkedin.com/in/codacad/"}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  className="md:text-2xl hover:opacity-80"
                  to={"https://github.com/Codacad"}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  className="md:text-2xl hover:opacity-80"
                  to={"https://www.frontendmentor.io/profile/Codacad"}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faDev} />
                </Link>
                <Link
                  className="md:text-2xl hover:opacity-80"
                  to={"https://www.facebook.com/rizcodi/"}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "400%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="hello flex flex-col gap-6 py-10 px-6 w-[100%] md:w-[60%] items-center md:items-start"
          >
            <motion.h1 className="md:text-8xl flex text-4xl sm:text-6xl font-bold font-madimi_one">
              <motion.h2
                initial={{ y: "-100%" }}
                transition={{ duration: 0.2, delay: 0.3 }}
                animate={{ y: 0 }}
              >
                H
              </motion.h2>
              <motion.h2
                initial={{ y: "-200%" }}
                transition={{ delay: 0.2, duration: 0.25 }}
                animate={{ y: 0 }}
              >
                e
              </motion.h2>
              <motion.h2
                initial={{ y: "-300%" }}
                transition={{ delay: 0.25, duration: 0.3 }}
                animate={{ y: 0 }}
              >
                l
              </motion.h2>
              <motion.h2
                initial={{ y: "-400%" }}
                transition={{ delay: 0.3, duration: 0.35 }}
                animate={{ y: 0 }}
              >
                l
              </motion.h2>
              <motion.h2
                initial={{ y: "-500%" }}
                transition={{ delay: 0.35, duration: 0.4 }}
                animate={{ y: 0 }}
              >
                o
              </motion.h2>
            </motion.h1>
            <h3 className="md:text-2xl text-xl  font-[600]">
              Here&rsquo;s who I am & what I do
            </h3>
            <div className="actions flex gap-10">
              <Link to={""}>
                <motion.button
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 1.025 }}
                  className="bg-blue-700 hover:ring-1 ring-blue-500 text-white py-2 rounded-xl px-4 hover:bg-white hover:text-blue-700 border border-blue-700"
                >
                  <FontAwesomeIcon className="mr-1 text-sm" icon={faFile} />{" "}
                  Resume
                </motion.button>
              </Link>
              <Link>
                <motion.button
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 1.025 }}
                  className="bg-blue-700 hover:ring-1 ring-blue-500 text-white p-2 text-sm md:text-[16px] rounded-xl px-4 hover:bg-white hover:text-blue-700 border border-blue-700"
                >
                  <FontAwesomeIcon
                    className="mr-1 text-sm"
                    icon={faDiagramProject}
                  />{" "}
                  Projects
                </motion.button>
              </Link>
            </div>
            <div className="summary">
              <p className="font-thin leading-8 text-center">
                I specialize in MERN stack development, crafting dynamic web
                applications with clean and intuitive interfaces. Proficient in
                frontend technologies like HTML, CSS, and React.js, coupled with
                backend expertise in Node.js and MongoDB. Let&rsquo;s build
                something amazing together.
              </p>
              <div className="tags flex flex-wrap gap-2 w-[100%] py-6 justify-center">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Mongoose",
                  "TailwindCSS",
                  "HTML/CSS/JS",
                ].map((tag, index) => (
                  <Link
                    className="text-blue-700 text-sm hover:opacity-80"
                    to={`#${tag}`}
                    key={index}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="about-footer md:p-12 p-8 sm:bg-white bg-[#f4ece6]">
        <div className="content text-sm flex sm:flex-row flex-col justify-center md:justify-end md:gap-16 gap-8">
          <div className="call flex flex-col items-center gap-2">
            <h2 className="md:font-[700] font-[500] font-madimi_one">Call</h2>
            <Link
              className="font-[400] md:text-sm text-[12px]"
              toi={`tel:${507713746}`}
            >
              +966507713746
            </Link>
          </div>
          <div className="write flex flex-col items-center gap-2">
            <h2 className="md:font-[700] font-[500] font-madimi_one">Write</h2>
            <Link
              className="font-[400] text-[12px] md:text-sm"
              to={`mailto:iamrizwan40@gmail.com`}
              target="_blank"
            >
              iamrizwan40@gmail.com
            </Link>
          </div>
          <div className="follow flex flex-col items-center gap-2">
            <h2 className="md:font-[700] font-[500] text-sm font-madimi_one">
              Follow Me
            </h2>
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
      </div>
    </>
  );
};

export default About;
