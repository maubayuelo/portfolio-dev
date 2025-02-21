import React from "react";
import FadeInSection from "../components/FadeInSection";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.scss";
import MauricioLogo from "/src/assets/images/mauricio-bayuelo-logo.svg"; // Import the logo

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname === "/") {
      // If already on the homepage, scroll to the section
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname !== "/" && sectionId == "section_portfolio") {
      // Navigate to the homepage and then scroll
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay to ensure the homepage has rendered
    } else {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  };

  // HEADER SCROLL TRANSITION
  document.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  return (
    <nav className="nav padding-top-md padding-bottom-md">
      <div className="container">
        <FadeInSection>
          <Link to="/" className="logo">
            <img src={MauricioLogo} alt="Logo" />
          </Link>
        </FadeInSection>

        <div className="nav-links-row">
          <FadeInSection>
            <a
              className="btn btn_comp type-uppercase type-bold"
              onClick={() => handleNavigation("section_portfolio")}
            >
              Portfolio
            </a>

            <a
              className="btn btn_comp btn_primary type-uppercase type-bold"
              onClick={() => handleNavigation("section_contact")}
            >
              Contact me
            </a>
          </FadeInSection>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
