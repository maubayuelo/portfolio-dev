import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
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
    <FadeInSection
      as="div"
      className="portfolio-project margin-bottom-md"
      repeat
      threshold={0.2}
      rootMargin="-5% 0px -5% 0px"
    >
      {internalLink && !liveLink && !githubLink ? (
        <Link to={internalLink} className="portfolio-visual-link no-padding">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/${image}`}
            alt={title}
            className="portfolio-visual"
          />
        </Link>
      ) : (
        <a
          href={liveLink || githubLink || "#"}
          className="portfolio-visual-link no-padding"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/images/${image}`}
            alt={title}
            className="portfolio-visual"
          />
        </a>
      )}
      <div className="portfolio-sumary">
        <h3 className="type-sz-sm type-bold margin-top-md margin-bottom-sm">
          {title}
        </h3>
        <p className="margin-bottom-sm">{description}</p>
        <p className="type-sz-caption no-margin-bottom">Developed with:</p>
        <div className="cont_row margin-bottom-md">
          {tags.map((tag, index) => (
            <span key={index} className="tag margin-top-sm">{tag}</span>
          ))}
        </div>
        <div className="cont_row margin-bottom-md">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn_outline type-uppercase type-bold"
            >
              View Repo{" "}
              <SiGithub className="project-card-icon margin-left-xsm" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn type-uppercase type-bold"
            >
              See Project{" "}
              <FiExternalLink className="project-card-icon margin-left-xsm" />
            </a>
          )}
          {internalLink && (
            <Link to={internalLink} className="btn type-uppercase type-bold">
              Read Case Study
            </Link>
          )}
        </div>
      </div>
    </FadeInSection>
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
