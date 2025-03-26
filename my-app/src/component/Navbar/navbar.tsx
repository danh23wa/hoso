import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./navbar.css"; // Nhập tệp CSS riêng

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const element = document.getElementById(link);
    if (element) {
      const navbarHeight = document.querySelector('.fixed-top').offsetHeight; // Lấy chiều cao của thanh điều hướng
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Lấy vị trí của phần tử
      const offsetPosition = elementPosition - navbarHeight; // Điều chỉnh vị trí theo chiều cao của thanh điều hướng

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`fixed-top bg-white shadow-sm`}>
      <header className="container d-flex flex-wrap justify-content-center py-3 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4 fw-bold">Nguyễn Quí Danh</span>
        </a>

        <ul className="nav nav-pills d-none d-lg-flex ">
          <li className="nav-item">
            <a 
              href="#Home" 
              className={`nav-link ${activeLink === "Home" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleLinkClick("Home"); }}
            >
              Home
            </a>
          </li>
          
          <li className="nav-item">
            <a 
              href="#About" 
              className={`nav-link ${activeLink === "About" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleLinkClick("About"); }}
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeLink === "skills" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleLinkClick("skills"); }}
            >
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a 
              href="#Contact" 
              className={`nav-link ${activeLink === "Contact" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleLinkClick("Contact"); }}
            >
              Contact
            </a>
          </li>
        </ul>

        
      </header>
      <div className="flex-grow-1"></div>
   
    <footer className="footer  bg-light mt-auto py-3 d-flex d-lg-none ">
    <ul className="  nav nav-pills  flex-wrap justify-content-center ">
          <li className=" nav-item">
            <a 
              href="#Home" 
              className={`nav-link ${activeLink === "Home" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleLinkClick("Home"); }}
            >
              Home
            </a>
          </li>
          
          <li className="nav-item">
            <a 
              href="#About" 
              className={`nav-link ${activeLink === "About" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleLinkClick("About"); }}
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeLink === "skills" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleLinkClick("skills"); }}
            >
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a 
              href="#Contact" 
              className={`nav-link ${activeLink === "Contact" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleLinkClick("Contact"); }}
            >
              Contact
            </a>
          </li>
        </ul>
    </footer>
  
    </div>
  );
};

export default NavBar;