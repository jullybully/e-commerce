import React from 'react';
import '../../App.css';
import Carousel from "../Carousel";

const slides = [
    {
      image: "https://picsum.photos/id/1/400/300",
      text: "Slide 1 text"
    },
    {
      image: "https://picsum.photos/id/2/400/300",
      text: "Slide 2 text"
    },
    {
      image: "https://picsum.photos/id/3/400/300",
      text: "Slide 3 text"
    }
  ];

export default function Home() {
  return (
    <>
      <Carousel slides={slides} />
    </>
  );
}
