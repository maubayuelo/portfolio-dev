import React from "react";
import FadeInSection from "../components/FadeInSection";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  const {
    title,
    image,
    description,
    tags,
    githubLink,
    liveLink,
    internalLink,
  } = project;

  return (
    <div className="portfolio-project margin-bottom-md">
      <a
        href={liveLink || githubLink || internalLink || "#"}
        className="portfolio-visual-link no-padding"
        target={liveLink || githubLink ? "_blank" : ""}
        rel={liveLink || githubLink ? "noopener noreferrer" : undefined}
      >
        <FadeInSection>
          <img
            src={`${import.meta.env.BASE_URL}assets/images/${image}`}
            alt={title}
            className="portfolio-visual"
          />
        </FadeInSection>
      </a>
      <div className="portfolio-sumary">
        <FadeInSection>
          <h3 className="type-sz-sm type-bold margin-top-md margin-bottom-sm">
            {title}
          </h3>
        </FadeInSection>
        <FadeInSection>
          <p className="margin-bottom-sm">{description}</p>
        </FadeInSection>
        <FadeInSection>
          <p className="type-sz-caption no-margin-bottom">Made with:</p>
        </FadeInSection>

        <div className="cont_row margin-bottom-md">
          {tags.map((tag, index) => (
            <>
              <FadeInSection>
                <span key={index} className="tag  margin-top-sm">
                  {tag}
                </span>
              </FadeInSection>
            </>
          ))}
        </div>
        <div className="cont_row margin-bottom-md">
          {githubLink && (
            <FadeInSection>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn_outline type-uppercase type-bold"
              >
                View Repo{" "}
                <i className="fab fa-github fa-lg margin-left-xsm"></i>
              </a>
            </FadeInSection>
          )}
          {liveLink && (
            <>
              <FadeInSection>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn type-uppercase type-bold"
                >
                  See Project{" "}
                  <i className="fas fa-external-link-alt fa-lg margin-left-xsm"></i>
                </a>
              </FadeInSection>
            </>
          )}
          {internalLink && (
            <FadeInSection>
              {" "}
              <a
                href={internalLink}
                rel="noopener noreferrer"
                className="btn type-uppercase type-bold"
              >
                Read Case Study
              </a>
            </FadeInSection>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
