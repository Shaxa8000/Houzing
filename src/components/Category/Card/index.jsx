import React from 'react';
import { Container, Image, Title } from './style';
import img from '../../../assets/img/img1.png';
import img2 from '../../../assets/img/category2.png';

const Card = ({ title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      <Image src={img} />
      <Image src={img2} />
    </Container>
  );
};

export default Card;
