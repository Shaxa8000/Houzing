import styled from'styled-components';
import { ReactComponent as share } from '../../assets/icon/share.svg';
import { ReactComponent as heart } from '../../assets/icon/heart.svg';
import { ReactComponent as beds } from '../../assets/icon/beds.svg';
import { ReactComponent as bath } from '../../assets/icon/bath.svg';
import { ReactComponent as garage } from '../../assets/icon/car.svg';
import { ReactComponent as square } from '../../assets/icon/area.svg';
import { ReactComponent as built } from '../../assets/icon/built.svg';
import { ReactComponent as download } from '../../assets/icon/download.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
`;

Wrapper.Wrapper = styled.div`
display: flex;
column-gap: 20px;
`

const ImgWrap = styled.div`
  display: flex;
  column-gap: 20px;
  margin: 24px 0;
`;

ImgWrap.Main = styled.img`
  width: 580px;
  height: 400px;
`;

ImgWrap.Small = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

ImgWrap.Box = styled.div`
  display: flex;
  gap: 20px;
`;

const Img = styled.img`
  width: 280px;
  height: 190px;
  position: relative;
`;


const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 880px;
`;

Left.TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

Left.IconWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

Left.IconText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

Left.Address = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  margin-bottom: 10px;
`;

Left.Heart = styled(heart)``;
Left.Share = styled(share)``;

Left.Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
`;

Left.DetailsWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

Left.Detail = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

Left.Beds = styled.div`
  display: flex;
`;

Left.BedsIcon = styled(beds)`
  width: 19px;
  height: 14px;
`;

Left.BathIcon = styled(bath)`
  width: 19px;
  height: 14px;
`;

Left.GarageIcon = styled(garage)`
  width: 19px;
  height: 14px;
`;

Left.SquareIcon = styled(square)`
  width: 19px;
  height: 14px;
`;

Left.BuiltIcon = styled(built)`
  width: 19px;
  height: 15px;
`;

Left.Price = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

Left.Description = styled.div`
display: flex;
flex-direction: column;
row-gap: 20px;
margin: 40px 0;
`;

Left.Download = styled(download)``;

Left.DownloadText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #0061df;
`;

Left.Border = styled.div`
  width: 880px;
  height: 1px;
  background: #e6e9ec;
  margin: 20px 0 48px 0;
`;



Left.Map = styled.div`
  margin-bottom: 48px;
`;



const Right = styled.div`
  width: 280px;
  height: 476px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

Right.Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 25px;
`;

Right.User = styled.div`
display: flex;
column-gap: 10px;
margin-bottom: 24px;
`;

Right.Name = styled.div`
display: flex;
flex-direction: column;
`;

Right.Text = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

Right.Form = styled.div`
display: flex;
flex-direction: column;
`;

Right.Border = styled.div`
  width: 232px;
  height: 0px;
  left: 1054px;
  top: 640px;
  border: 1px solid #e6e9ec;
  margin-bottom: 24px;
`;

Right.Message = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  margin-bottom: 8px;
`;

Right.SubMessage = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;

Right.CheckboxWrap = styled.div`
display: flex;
column-gap: 10px;
margin-bottom: 20px;
`;



export { Container, Wrapper, ImgWrap, Img, Left, Right };
