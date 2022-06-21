import React, { useRef } from 'react';
import { CarouselWrapper, Icon, Img, MainCarousel, Info } from './style';
import img1 from '../../../assets/img/apartment1.png';
import img2 from '../../../assets/img/apartment2.png';
import { Button } from '../../Generic';

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
      <Info>
        <Info.Title>Skyper Pool Apartment</Info.Title>
        <Info.Address>112 Glenwood Ave Hyde Park, Boston, MA</Info.Address>
        <Info.Icons>
          <Info.Wrap>
            <Info.Beds />
            <Info.Text>4 beds</Info.Text>
          </Info.Wrap>
          <Info.Wrap>
            <Info.Bath />
            <Info.Text>5 Baths</Info.Text>
          </Info.Wrap>
          <Info.Wrap>
            <Info.Garage />
            <Info.Text>1 Garage</Info.Text>
          </Info.Wrap>
          <Info.Wrap>
            <Info.Square />
            <Info.Text>1200 Sq Ft</Info.Text>
          </Info.Wrap>
        </Info.Icons>
        <Info.Price>$5,250/mo</Info.Price>
        <Button width={'180px'} type='secondary'>
          <Info.Text>Read More</Info.Text>
        </Button>
      </Info>
    </CarouselWrapper>
  );
};

export default Carousel;
