import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiNodedotjs,
  SiTailwindcss,
  SiWordpress,
  SiSupabase,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import "./InfiniteSlider.scss";

const icons = [
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiNodedotjs,
  SiTailwindcss,
  SiWordpress,
  SiSupabase,
  SiVercel,
  SiGithub,
];

const InfiniteSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider margin-top-md">
        {[...icons, ...icons].map((Icon, index) => (
          <div key={index} className="slider-item">
            <Icon className="slider-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
