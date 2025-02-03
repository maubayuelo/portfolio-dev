import { useInView } from "react-intersection-observer";
import "./FadeInSection.scss";

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
