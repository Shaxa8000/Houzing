import React from 'react';
import { data } from '../../../mock/chooseUs';
import { Container, Wrapper, Title, Descr, Card, } from './style';

const ChooseUs = () => {
  return (
    <Container>
      <Title>Why Choose Us</Title>
      <Descr>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </Descr>
      <Wrapper>
        {data.map((value) => {
          return (
            <Card>
                <value.icon />
              <Card.Subtitle>{value.subtitle}</Card.Subtitle>
              <Card.Descr>{value.description}</Card.Descr>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default ChooseUs