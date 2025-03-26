import React from 'react';
import { motion } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../../../public/tsconfig.app.svg"; // Đường dẫn đến hình ảnh
import { FaGithub, FaEnvelope } from 'react-icons/fa'; // Nhập biểu tượng
import { useInView } from 'react-intersection-observer';
import "./home.css";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  

  return (
    <div id="Home" className="d-flex flex-row" style={{ height: '100vh' }}>
  
      <motion.div ref={ref} className="profile-container w-50 d-flex justify-content-center align-items-center">
  <img 
    src={profilePic} 
    alt="Profile" 
    className="img-fluid rounded-circle" 
    style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
  />
</motion.div>

<motion.div ref={ref} className="text-container w-50 d-flex flex-column justify-content-center align-items-start p-4">
  <h1 className="display-4">Hi,</h1>
  <h2>I'm Nguyễn Qúi Danh</h2>
  <p>Full Stack Software Developer</p>
  <a href="#Contact" className="btn btn-primary">Contact</a>
  
  <div>
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