import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #f5f7fc;
  width: 100%;
  margin-top: 48px;
  padding-top: 40px;
`;

const Wrapper = styled.div`
display: flex;
width: 100%;
max-width: 1440px;
padding: 48px 130px;
`;



const Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
  text-align: center;
`;

const Descr = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align: center;
  margin-top: 8px;
`;


const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

Card.Subtitle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #0d263b;
  margin: 24px 0 8px 0;
`;

Card.Descr = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  width: 230px;
  height: 120px;
`;







export { Container, Wrapper, Title, Descr, Card,  };