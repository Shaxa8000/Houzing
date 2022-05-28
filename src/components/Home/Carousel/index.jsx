import React, { useRef } from 'react';
import { CarouselWrapper, Icon, Img, MainCarousel } from './style';
import img1 from '../../../assets/img/apartment1.png';
import img2 from '../../../assets/img/apartment2.png';
// import img3 from '../../../assets/img/apartment3.jpg';

export const Carousel = () => {
  const slider = useRef();
  return (
    <CarouselWrapper>
      <Icon.Right onClick={() => slider.current?.next()} />
      <Icon.Left onClick={() => slider.current?.prev()} />
      <MainCarousel ref={slider} dots autoplay>
        <Img src={img1} alt='img' />
        <Img src={img2} alt='img' />
        <Img src={img1} alt='img' />
        <Img src={img2} alt='img' />
        <Img src={img1} alt='img' />
        <Img src={img2} alt='img' />
      </MainCarousel>
    </CarouselWrapper>
  );
};

export default Carousel;
