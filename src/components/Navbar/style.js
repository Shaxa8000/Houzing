import styled from "styled-components";
import {ReactComponent as logoImg} from '../../assets/icon/logo.svg';
import { NavLink } from "react-router-dom";


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
`;

const Main = styled.div`
display: flex;
justify-content: center;
background: var(--primaryColor);
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #ffff;
padding: var(--padding);
height: 64px;
font-size: 16px;
width: 100%;
max-width: var(--width);
`;

const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({logo}) => logo && 'pointer'};

.active {
    color: grey;
}
`;

const Logo = styled(logoImg)`
width: 30px;
margin-right: 12px;
`;

const Link = styled(NavLink)`
text-decoration: none;
color: #ffff;
padding: 0 32px;
`


export{Container, Wrapper, Section, Logo, Link, Main};