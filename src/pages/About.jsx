import { Link } from "react-router-dom";
import MyPic from "../assets/myphoto.jpg";
import "../css/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <>
      <div className="about-me md:p-12 relative w-[100%]">
        <div className="about-card block w-[100%] md:w-[50%] md:flex">
          <div className="profile w-[100%] h-100% md:w-[50%] drop-shadow-sm rounded-md relative bg-[#f4ece6]">
            <div className="content h-[400px] p-6 md:p-12 flex flex-col gap-12 items-center">
              <img
                src={MyPic}
                alt=""
                className="rounded-full w-[100px] md:w-[200px] md:h-[200px] h-[100px]"
              />
              <div className="name text-center font-poppins font-black text-2xl tracking-wide">
                Mohd Rizwan
              </div>
              <span className="divider w-16 p-[1px] poppins-black bg-blue-700"></span>
              <p className="job uppercase font-thin tracking-widest">
                Web Developer
              </p>
            </div>
            <div className="footer rounded-b-md absolute  bottom-0 w-[100%] bg-white p-2 flex justify-center">
              <div className="social-medias w-[50%] flex justify-around md:gap-8">
                <Link className="md:text-2xl" to={""}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link className="md:text-2xl" to={""}>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link className="md:text-2xl" to={""}>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link className="md:text-2xl" to={""}>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
          </div>
          <div className="hello flex flex-col gap-6 py-10 px-6 w-[100%] md:w-[60%] items-center md:items-start">
            <h1 className="md:text-8xl text-4xl sm:text-6xl font-bold font-madimi_one">Hello</h1>
            <h3 className="md:text-2xl text-xl  font-[600]">
              Here&rsquo;s who I am & what I do
            </h3>
            <div className="actions flex gap-10">
              <Link
                className="bg-blue-700 text-white py-2 rounded-xl px-4 hover:bg-white hover:text-blue-700 border border-blue-700"
                to={""}
              >
                <FontAwesomeIcon className="mr-1 text-sm" icon={faFile} /> Resume
              </Link>
              <Link className="bg-blue-700 text-white p-2 text-sm md:text-[16px] rounded-xl px-4 hover:bg-white hover:text-blue-700 border border-blue-700">
                <FontAwesomeIcon className="mr-1 text-sm" icon={faDiagramProject} />{" "}
                Projects
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
            </div>
          </div>
        </div>
      </div>
      <div className="about-footer md:p-12 p-8">
        <div className="content text-sm flex justify-center md:justify-end md:gap-16 gap-8">
          <div className="call flex flex-col items-center gap-2">
            <h2 className="md:font-[700] font-[500] font-madimi_one">Call</h2>
            <Link className="font-[400] md:text-sm text-[12px]" toi={`tel:${507713746}`}>
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
            <h2 className="md:font-[700] font-[500] text-sm font-madimi_one">Follow Me</h2>
            <ul className="flex gap-4">
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faInstagram} />
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
