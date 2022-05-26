import React from 'react';
import { Container } from './style';
import Filter from '../Filter';
import Carousel from './Carousel';
import Recommendation from './Recommendation';


const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommendation/>
      </Container>
  )
}

export default Home