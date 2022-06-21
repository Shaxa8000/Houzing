import React from 'react';
import { Container, Wrapper, Box, Border, LogoWrap} from './style';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Box.Title>Contact Us</Box.Title>
          <Box.IconWrap>
            <Box.Location />
            <Box.Text>
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </Box.Text>
          </Box.IconWrap>

          <Box.IconWrap>
            <Box.Call />
            <Box.Text>123 456 7890</Box.Text>
          </Box.IconWrap>

          <Box.IconWrap>
            <Box.Email />
            <Box.Text>support@houzing.com</Box.Text>
          </Box.IconWrap>
          <Box.IconGroup>
            <Box.Facebook />
            <Box.Twitter />
            <Box.Insta />
            <Box.Linkedin />
          </Box.IconGroup>
        </Box>
        <Box>
          <Box.Title>Discover</Box.Title>
          <Box.Text>Chicago</Box.Text>
          <Box.Text>Miami</Box.Text>
          <Box.Text>Los Angeles</Box.Text>
          <Box.Text>New York</Box.Text>
        </Box>
        <Box>
          <Box.Title>Category</Box.Title>
          <Box.Text>Apartments</Box.Text>
          <Box.Text>Condos</Box.Text>
          <Box.Text>Villas</Box.Text>
          <Box.Text>Houses</Box.Text>
          <Box.Text>Offices</Box.Text>
          <Box.Text>Retail</Box.Text>
        </Box>
        <Box>
          <Box.Title>Category</Box.Title>
          <Box.Text>About Us</Box.Text>
          <Box.Text>Terms & Conditions</Box.Text>
          <Box.Text>Support Center</Box.Text>
          <Box.Text>Contact Us</Box.Text>
        </Box>
      </Wrapper>
      <Border />
      <LogoWrap>
        <LogoWrap.Wrap>
          <Box.Logo />
          <LogoWrap.Main>Houzing</LogoWrap.Main>
        </LogoWrap.Wrap>
        <LogoWrap.Text>
          Copyright © 2021 CreativeLayers. All Right Reserved.
        </LogoWrap.Text>
        {/* <Box.Backtop/> */}
      </LogoWrap>
    </Container>
  );
}

export default Footer