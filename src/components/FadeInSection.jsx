import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import "./FadeInSection.scss";

// Props
// - delay: number | string -> delay before the fade-in starts (e.g., 150 or "150ms" or "0.2s"). Default 0ms.
// - duration: number | string -> duration of the transition. Default matches SCSS (1000ms).
// - className: optional extra classes to merge.
// - style: optional inline styles to merge.
const toMsString = (val, fallback) => {
  if (val === undefined || val === null) return fallback;
  if (typeof val === "number") return `${val}ms`;
  return val; // assume string with units (e.g., "200ms" or "0.2s")
};

const FadeInSection = ({
  children,
  delay = 0,
  exitDelay = 0,
  duration = 1000,
  repeat = false,
  threshold = 0.15,
  rootMargin = "0px",
  className = "",
  style = {},
}) => {
  const { ref, inView } = useInView({
    triggerOnce: !repeat,
    threshold,
    rootMargin,
  });

  const enterDelay = toMsString(delay, "0ms");
  const leaveDelay = toMsString(exitDelay, "0ms");
  const transitionDelay = inView ? enterDelay : leaveDelay;
  const transitionDuration = toMsString(duration, "1000ms");

  return (
    <div
      ref={ref}
      className={`fade-in-section ${
        inView ? "visible" : ""
      } ${className}`.trim()}
      style={{ transitionDelay, transitionDuration, ...style }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;

FadeInSection.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  exitDelay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  repeat: PropTypes.bool,
  threshold: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  rootMargin: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
