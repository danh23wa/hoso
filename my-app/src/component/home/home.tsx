import { motion } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../../../public/tsconfig.app.svg";
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import "./home.css";

const Home = () => {
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div id="Home" className="d-flex flex-md-row flex-column">
      <motion.div
        ref={ref}
        className="profile-container w-md-50 d-flex justify-content-center align-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="img-fluid rounded-circle"
        />
      </motion.div>

      <motion.div
        ref={ref}
        className="text-container w-md-50 d-flex flex-column justify-content-center align-items-md-start align-items-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="display-4">Hi,</h1>
        <h2>I'm Nguyễn Quí Danh</h2>
        <p>Full Stack Software Developer</p>
        <a href="#Contact" className="btn btn-primary">Contact</a>
        <div className="mt-3">
          <h4>
            <a href="https://github.com/danh23wa" target="_blank" rel="noopener noreferrer" className="icon">
              <FaGithub size={24} />
            </a>
            {" | "}
            <a href="mailto:nguyendanh2147@gmail.com" className="icon">
              <FaEnvelope size={24} />
            </a>
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;