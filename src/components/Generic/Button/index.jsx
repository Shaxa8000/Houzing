import React from 'react';
import { Container } from './style';


export const Button = ({
    children,
    onClick,
    height,
    width,
    type,
    mr,
    ml,
    mt,
    mb
}) => {
  return (
      <Container className='nocopy'
          mr={mr}
          ml={ml}
          mt={mt}
          mb={mb}
          type={type}
          width={width}
          height={height}
          onClick={onClick}
      >{children}</Container>
  )
}

export default Button
