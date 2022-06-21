import React from 'react';
import { Container } from './style';
import Filter from '../Filter';
import Carousel from './Carousel';
import Recommendation from './Recommendation';
import WhyChooseUs from './WhyChooseUs';
import Category from '../Category';
import Popular from './Popular';


const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommendation />
      <WhyChooseUs/>
      <Category />
      <Popular/>
    </Container>
  );
}

export default Home