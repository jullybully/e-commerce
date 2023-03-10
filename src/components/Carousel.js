import React, { useState } from "react";
import './Carousel.css';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const images = [
    {   url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/73f1af100370129.5f074b07862ef.jpg", 
        text: "This eco-friendly chair aims to raise awareness for our polluted seas.",
        color: "#BDCCC5",
        page: "./products",
        button: "SHOP THE BUNDLE"

    },
    {   url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d9db94113120329.60219edbe856c.jpg", 
        text: "The design explores the concept of sitting and laying with organic, sweeping lines.",
        color: "#E7E6EB",
        page: "./products",
        button: "SAVE 10%"
    },
    {   url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8f2e83118577525.608bbcee49bfc.jpg", 
        text: "Valley sideboard",
        color: "#BDAB9D",
        page: "./products",
        button: "SHOP BEST SELLERS"
    },
  ];

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-left">
        <img src={images[index].url} alt={images[index].text} className="image-width"/>
      </div>
      <div className="carousel-right" style={{backgroundColor: images[index].color}}>
        <div className="carousel-text">{images[index].text}</div>
        <a className="button-black" href={images[index].page}>{images[index].button}</a>
      </div>
      <button className="prev-button" onClick={handlePrev}>
      </button>
      <button className="next-button" onClick={handleNext}>
      </button>
    </div>
  );
};

export default Carousel;