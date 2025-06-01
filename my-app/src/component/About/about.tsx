import { motion } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../../../public/IMG_0558.jpg";
import { useInView } from 'react-intersection-observer';
import "./about.css";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div id="About" className="container">
      <div className="row">
        <motion.div
          ref={ref}
          className="col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="display-4">Nguyễn Qúi Danh</h2>
          <p>
            Since the beginning of my journey at HUTECH University, I have been dedicated to honing my skills and expanding my knowledge in Information Technology. Through various projects and collaborations, I have applied theoretical concepts to real-world challenges, reinforcing my technical expertise and problem-solving abilities.
            I am naturally curious and always eager to learn new technologies, striving to enhance my skills every day. My passion lies in full-stack development, where I enjoy crafting efficient and scalable solutions. Whether working independently or as part of a team, I am committed to delivering high-quality results and embracing new challenges with confidence.
            With a strong foundation in software development and a growth mindset, I am excited about the opportunities ahead and the potential to contribute meaningfully to innovative projects.
          </p>
          <a href="https://drive.google.com/uc?export=download&id=1sCOMuvHYf2H6Lf6QfpAJA3sZfvYi6yNK" className="btn btn-primary">
            Download Resume
          </a>
        </motion.div>
        <motion.div
          ref={ref}
          className="col-md-6 d-flex justify-content-center align-items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;