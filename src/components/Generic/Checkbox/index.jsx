import React from 'react';
import { AntCheckbox } from './style';

const Checkbox = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  name,
  value,
  placeholder,
  defaultValue,
  size
}) => {
  return (
    <AntCheckbox size={size} onChange={onChange}>{children}</AntCheckbox>
  )
};

export default Checkbox;
