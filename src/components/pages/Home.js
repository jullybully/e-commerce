import React from 'react';
import '../../App.css';
import Carousel, { CarouselItem } from "../Carousel";

export default function Home() {
  return (
    <>
      <h1 className='home'>home</h1>
      <Carousel>
        <CarouselItem >
            <img src="https://media.bonaldo.com/wp-content/uploads/2020/07/02102832/bonaldo-tavolo-cross-table-stilllife-1920x1080.jpg" alt="image1" />
        </CarouselItem>
        <CarouselItem>Item </CarouselItem>
        <CarouselItem>Item </CarouselItem>
      </Carousel>
    </>
  );
}
