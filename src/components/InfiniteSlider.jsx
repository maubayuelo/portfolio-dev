import React, { useEffect, useRef } from "react";
import "./InfiniteSlider.scss"; // Add styles

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
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 0.3; // Adjust scroll speed
      if (scrollAmount >= slider.scrollWidth / 1) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30); // Smooth scrolling
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider margin-top-lg" ref={sliderRef}>
        {[...icons, ...icons].map((icon, index) => (
          <div key={index} className="slider-item">
            <i className={`fab fa-${icon} fa-5x`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
