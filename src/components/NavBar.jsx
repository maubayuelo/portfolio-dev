import { useEffect } from "react";
import FadeInSection from "../components/FadeInSection";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import MauricioLogo from "/src/assets/images/mauricio-bayuelo-logo.svg"; // Import the logo
import useSectionNavigation from "../hooks/useSectionNavigation";

const NavBar = () => {
  const handleNavigation = useSectionNavigation();
  const location = useLocation();
  const navigate = useNavigate();

  // HEADER SCROLL TRANSITION (attach once)
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".nav");
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e) => {
    // If already on home route, just smooth scroll to top
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home; router will render home and natural scroll restoration (top)
      e.preventDefault();
      navigate("/");
      // After navigation ensure top position
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  return (
    <nav className="nav padding-top-md padding-bottom-md">
      <div className="container">
        <FadeInSection>
          <Link to="/" className="logo" onClick={handleLogoClick}>
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
