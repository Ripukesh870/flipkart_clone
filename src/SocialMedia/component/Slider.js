// Slider.js
import React, { useState } from "react";
import './css/Slider.css'; // optional for styling


const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="left-arrow" onClick={goToPrevious}>
          &#10094;
        </div>
        <img src={images[currentIndex]} alt="slider" className="image-slide" />
        <div className="right-arrow" onClick={goToNext}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Slider;
