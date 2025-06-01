import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./navbar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    const element = document.getElementById(link);
    if (element) {
      const navbar = document.querySelector('.fixed-top') as HTMLElement | null;
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed-top bg-white shadow-sm">
      <header className="container-fluid container-lg d-flex flex-wrap justify-content-center py-3 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fw-bold" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>
            Nguyễn Quí Danh
          </span>
        </a>

        <ul className="nav nav-pills d-none d-lg-flex">
          <li className="nav-item">
            <a
              href="#Home"
              className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("Home");
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#About"
              className={`nav-link ${activeLink === "About" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("About");
              }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              className={`nav-link ${activeLink === "skills" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"
              className={`nav-link ${activeLink === "Contact" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("Contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </header>

      <footer className="footer bg-light mt-auto py-3 d-flex d-lg-none">
        <ul className="nav nav-pills flex-wrap justify-content-center">
          {/* Repeat nav items as above */}
        </ul>
      </footer>
    </div>
  );
};

export default NavBar;