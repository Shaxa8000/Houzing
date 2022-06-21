import styled from 'styled-components';
import apartment from '../../../assets/img/apartment2.png';


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 571px;
  background: rgba(0,0,0,0.7)url(${apartment});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  margin-top: 70px;
  position: relative;
`;

const Description = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 567px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Botton = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export { Container, Description, Botton };