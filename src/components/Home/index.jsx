import React from 'react';
import { Container } from './style';
import Filter from '../Filter';
import Carousel from './Carousel';
import Recommendation from './Recommendation';
import Category from '../Category';


const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommendation />
      <Category />
    </Container>
  );
}

export default Home