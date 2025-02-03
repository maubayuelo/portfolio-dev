import React, { useState } from "react";
import FadeInSection from "../components/FadeInSection";
import "./Footer.scss";

const Footer = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Function to copy email to clipboard
  const copyEmail = () => {
    const email = "maubayuelo@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      // Show tooltip
      setTooltipVisible(true);

      // Hide tooltip after 500ms
      setTimeout(() => {
        setTooltipVisible(false);
      }, 500);
    });
  };

  return (
    <footer id="section_contact">
      <div className="row padding-top-lg padding-bottom-md">
        <FadeInSection>
          <h4 className="type-center type-sz-sm type-bold margin-bottom-md">
            Contact me. Let’s create solutions together!
          </h4>
        </FadeInSection>
        <FadeInSection>
          <a
            className="btn btn_primary type-uppercase type-bold margin-bottom-md"
            href="mailto:maubayuelo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            maubayuelo@gmail.com
          </a>
        </FadeInSection>

        <FadeInSection>
          <span className="footer-link margin-bottom-md">
            <button
              className="btn btn_comp type-bold type-xsz-sm no-margin"
              id="mail_link"
              onClick={copyEmail}
            >
              <i className="fas fa-clipboard fa-md margin-right-xsm"></i> Copy
              Email To Clipboard
            </button>
            <div
              className={`tooltip ${tooltipVisible ? "display" : ""}`}
              id="tooltip"
            >
              <p>Copied!</p>
              <span className="triangle"></span>
            </div>
          </span>
        </FadeInSection>
        <FadeInSection>
          <span className="footer-link margin-bottom-sm">
            <i className="fas fa-download fa-md margin-right-xsm"></i>

            <a
              className="type-bold type-xsz-sm no-margin"
              href="mauricio-bayuelo-cv-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Mauricio's CV (PDF)
            </a>
          </span>
        </FadeInSection>
      </div>
      <div className="row padding-bottom-lg">
        <a
          className="type-center"
          href="https://www.linkedin.com/in/maubayuelo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          className="type-center"
          href="https://github.com/maubayuelo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
