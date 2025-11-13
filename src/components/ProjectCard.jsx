import PropTypes from "prop-types";
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
        <FadeInSection
          repeat
          threshold={0.5}
          rootMargin="-10% 0px -10% 0px"
          delay={0}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/images/${image}`}
            alt={title}
            className="portfolio-visual"
          />
        </FadeInSection>
      </a>
      <div className="portfolio-sumary">
        <FadeInSection
          repeat
          threshold={0.5}
          rootMargin="-10% 0px -10% 0px"
          delay={120}
        >
          <h3 className="type-sz-sm type-bold margin-top-md margin-bottom-sm">
            {title}
          </h3>
        </FadeInSection>
        <FadeInSection
          repeat
          threshold={0.5}
          rootMargin="-10% 0px -10% 0px"
          delay={200}
        >
          <p className="margin-bottom-sm">{description}</p>
        </FadeInSection>
        <FadeInSection
          repeat
          threshold={0.5}
          rootMargin="-10% 0px -10% 0px"
          delay={240}
        >
          <p className="type-sz-caption no-margin-bottom">Developed with:</p>
        </FadeInSection>

        <div className="cont_row margin-bottom-md">
          {tags.map((tag, index) => (
            <FadeInSection
              key={index}
              repeat
              threshold={0.5}
              rootMargin="-10% 0px -10% 0px"
              delay={300 + index * 60}
            >
              <span className="tag  margin-top-sm">{tag}</span>
            </FadeInSection>
          ))}
        </div>
        <div className="cont_row margin-bottom-md">
          {githubLink && (
            <FadeInSection
              repeat
              threshold={0.5}
              rootMargin="-10% 0px -10% 0px"
              delay={360}
            >
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
            <FadeInSection
              repeat
              threshold={0.5}
              rootMargin="-10% 0px -10% 0px"
              delay={420}
            >
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
          )}
          {internalLink && (
            <FadeInSection
              repeat
              threshold={0.5}
              rootMargin="-10% 0px -10% 0px"
              delay={480}
            >
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

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    internalLink: PropTypes.string,
  }).isRequired,
};
