import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={prevImage}>
        Prev
      </button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="carousel-image" />
      <button className="next-button" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
