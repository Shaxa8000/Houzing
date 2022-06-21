import React from 'react';
import { Container, Description, Botton } from './style';
import { Button } from '../../Generic';

const Popular = () => {
  return (
    <Container>
      <Description>
        Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
      </Description>
      <Botton>
        <Button type='primary' width={'180px'}>
          Read More
        </Button>
      </Botton>
    </Container>
  );
}

export default Popular