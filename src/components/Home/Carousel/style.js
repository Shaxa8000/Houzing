import styled from 'styled-components';
import { Carousel } from 'antd';
import { ReactComponent as arrow } from '../../../assets/icon/left-arrow.svg';

const CarouselWrapper = styled('div')`
  position: relative;
`;

const MainCarousel = styled(Carousel)`
  // height: fit-content;
  height: 570px !important;
`;

const Img = styled.img`
  background: black;
  width: 100%;
  height: 570px;
`;
const Icon = styled.div``;

Icon.Left = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;
Icon.Right = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(-100%, -40%) rotate(180deg);
  width: 45px;
  height: 45px;
  color: black;
  opacity: 0.5;
  background: white;
  padding: 12px;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;
export { MainCarousel, CarouselWrapper, Img, Icon };
