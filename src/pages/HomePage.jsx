//import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FadeInSection from "../components/FadeInSection";
import MauriciosPortrait from "/src/assets/images/mauricio-pic.jpg"; // Import the logo
import InfiniteSlider from "../components/InfiniteSlider";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <header className="header-home">
        <div className="container padding-top-lg">
          <FadeInSection>
            <img src={MauriciosPortrait} alt="Mauricio Bayuelo" />
          </FadeInSection>
          <FadeInSection>
            <h1 className="type-sz-sm type-bold">
              Empowering User Experiences with Front-End Development
            </h1>
          </FadeInSection>
        </div>

        <FadeInSection>
          <main className="container">
            <InfiniteSlider />
          </main>
        </FadeInSection>
      </header>
      <main className="container">
        <div className="section_portfolio" id="section_portfolio"></div>
        <FadeInSection>
          <h2 className="type-sz-sm type-center type-uppercase type-bold margin-top-lg">
            Portfolio
          </h2>
        </FadeInSection>
        <div className="portfolio-grid margin-top-lg">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
