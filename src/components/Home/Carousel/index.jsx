import React, { useRef } from 'react';
import { CarouselWrapper, Icon, Img, MainCarousel } from './style';
import img1 from '../../../assets/img/apartment1.jpg';
import img2 from '../../../assets/img/apartment2.jpg';
import img3 from '../../../assets/img/apartment3.jpg';

export const Carousel = () => {
  const slider = useRef();
  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.next()} />
      <Icon.Right onClick={() => slider.current?.prev()} />
      <MainCarousel ref={slider} dots autoplay>
        <Img src={img1} alt='img' />
        <Img src={img2} alt='img' />
        <Img src={img3} alt='img' />
        <Img src={img1} alt='img' />
        <Img src={img2} alt='img' />
        <Img src={img3} alt='img' />
      </MainCarousel>
    </CarouselWrapper>
  );
};

export default Carousel;
