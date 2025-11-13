//import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FadeInSection from "../components/FadeInSection";
import MauriciosPortrait from "/src/assets/images/mauricio-pic.png"; // Import the logo
import InfiniteSlider from "../components/InfiniteSlider";
import "./HomePage.scss";
import useSectionNavigation from "../hooks/useSectionNavigation";

const HomePage = () => {
  const handleNavigation = useSectionNavigation();
  return (
    <>
      <header className="header-home">
        <div className="container padding-top-lg">
          <FadeInSection
            repeat
            threshold={0.5}
            rootMargin="-10% 0px -10% 0px"
            delay={0}
          >
            <img src={MauriciosPortrait} alt="Mauricio Bayuelo" />
          </FadeInSection>

          <div className="tagName">
            <FadeInSection
              repeat
              threshold={0.5}
              rootMargin="-10% 0px -10% 0px"
              delay={150}
            >
              <h1 className="type-sz-sm type-bold no-margin-bottom">
                Crafting Fast, Scalable Interfaces That Drive Conversions
              </h1>
            </FadeInSection>

            <FadeInSection
              repeat
              threshold={0.5}
              rootMargin="-10% 0px -10% 0px"
              delay={300}
            >
              <p className="type-sz-sx margin-top-sm no-margin-bottom">
                I&apos;m Mauricio — a front-end specialist using AI, design
                thinking, and modern tools like React and Next.js to craft
                smarter web experiences.
              </p>
            </FadeInSection>

            <FadeInSection>
              <div className="btn-group">
                <a
                  className="btn btn_outline type-uppercase type-bold type-sz-sx"
                  onClick={() => handleNavigation("section_portfolio")}
                >
                  Check out my work
                </a>
                <a
                  className="btn btn_primary type-uppercase type-bold type-sz-sx"
                  onClick={() => handleNavigation("section_contact")}
                >
                  Contact me
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection
          repeat
          threshold={0.1}
          rootMargin="20% 0px -5% 0px"
          delay={450}
        >
          <main className="container">
            <InfiniteSlider />
          </main>
        </FadeInSection>
      </header>
      <main className="container">
        <div className="section_portfolio" id="section_portfolio"></div>
        <FadeInSection
          repeat
          threshold={0.5}
          rootMargin="-10% 0px -10% 0px"
          delay={0}
        >
          <h2 className="type-sz-sm type-center type-uppercase type-bold margin-top-lg">
            Portfolio
          </h2>
        </FadeInSection>
        <div className="portfolio-grid margin-top-lg">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
