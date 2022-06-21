import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 95px;
  // padding: 140px;
  // padding: 0 130px !important;
`;

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Cards = styled('div')`
  display: flex;
  width: 1240px;
  margin-top: 32px;
  justify-content: space-between;
`;

const ArrowLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  right: 20px;
  opacity: 0.5;
  transform: translate(-40%, -100%);
  width: 45px;
  height: 45px;
  color: black;
  background: white;
  padding: 12px;

  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 0.97;
  }
  :active {
    opacity: 0.7;
  }
`;

const ArrowRight = styled(ArrowLeft)`
  position: absolute;
  left: 20px;
  transform: translate(-20%, -100%);
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 40px;
  `;


export { Container, Cards, ArrowLeft, ArrowRight, Wrapper };
