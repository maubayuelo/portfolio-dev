import "./InfiniteSlider.scss";

const icons = [
  "html5",
  "css3-alt",
  "js",
  "sass",
  "bootstrap",
  "react",
  "node",
  "php",
  "wordpress",
  "github",
  "figma",
];

const InfiniteSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider margin-top-md">
        {[...icons, ...icons].map((icon, index) => (
          <div key={index} className="slider-item">
            <i className={`fab fa-${icon} fa-3x`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
