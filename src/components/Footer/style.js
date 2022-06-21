import styled from 'styled-components';
import { ReactComponent as location } from '../../assets/icon/location.svg';
import { ReactComponent as call } from '../../assets/icon/phone.svg';
import { ReactComponent as email } from '../../assets/icon/email.svg';
import { ReactComponent as facebook } from '../../assets/icon/facebook.svg';
import { ReactComponent as linkedin } from '../../assets/icon/linkedin.svg';
import { ReactComponent as instagram } from '../../assets/icon/instagram.svg';
import { ReactComponent as twitter } from '../../assets/icon/twitter.svg';
import { ReactComponent as logo } from '../../assets/icon/logo.svg';
import { ReactComponent as backtop } from '../../assets/icon/backtop.svg';
import { BackTop } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  background: #0d263b;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
max-width: var(--width);
padding: 48px 130px;
`;


const Box = styled.div`
display: flex;
// width: fit-content;
flex-direction: column;
max-width: 300px;
row-gap: 10px;
`;

Box.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 20px;
`;

Box.IconWrap = styled.div`
display: flex;
gap: 20px;
`;

Box.Location = styled(location)``;
Box.Call = styled(call)``;
Box.Email = styled(email)``;
Box.Facebook = styled(facebook)``;
Box.Twitter = styled(twitter)``;
Box.Insta = styled(instagram)``;
Box.Linkedin = styled(linkedin)``;
Box.Logo = styled(logo)``;
Box.Backtop = styled(backtop);


Box.Text = styled.div`
//  width: 256px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

Box.IconGroup = styled.div`
display: flex;
align-items: center;
column-gap: 20px;
margin-top: 15px;
`;

const Border = styled.div`
  height: 2px;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
`;

const LogoWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1440px;
padding: 20px 130px;
`;

LogoWrap.Wrap = styled.div`
display: flex;
column-gap: 12px;
align-items: center;
`;

LogoWrap.Main = styled.div`
  width: 256px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;



LogoWrap.Text = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;







export { Container, Wrapper, Box,Border, LogoWrap };