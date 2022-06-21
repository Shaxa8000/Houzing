import styled from 'styled-components';
import { Carousel } from 'antd';
import { ReactComponent as arrow } from '../../../assets/icon/left-arrow.svg';
import img2 from '../../../assets/img/apartment2.png';
import {ReactComponent as beds} from '../../../assets/icon/beds.svg';
import { ReactComponent as bath} from '../../../assets/icon/bath.svg';
import { ReactComponent as garage} from '../../../assets/icon/garage.svg';
import { ReactComponent as square }from '../../../assets/icon/square.svg';


const CarouselWrapper = styled('div')`
  position: relative;
`;

const MainCarousel = styled(Carousel)`
  height: fit-content;
  // height: 570px !important;
`;

const Img = styled.img`
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
  transform: translate(100%, -40%);
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

const Info = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Info.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

Info.Address = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 15px;
`;

Info.Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 25px;
`;

Info.Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Info.Text = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

Info.Beds = styled(beds)`
  width: 17px;
  height: 17px;
`;
Info.Bath = styled(bath)`
  width: 17px;
  height: 17px;
`;
Info.Garage = styled(garage)`
  width: 17px;
  height: 17px;
`;
Info.Square = styled(square)`
width: 17px;
height: 17px;
`;

Info.Price = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 24px 0 35px 0;
`;







export { MainCarousel, CarouselWrapper, Img, Icon, Info };
