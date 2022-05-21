import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';
// import { Container } from './style';

export const Root = () => {
  return (
    <Routes>
      {/* {navbar.map(({ path, Element, id, hidden }) => {
        return hidden && <Route key={id} path={path} element={Element} />;
      })} */}

      <Route element={<Navbar />}>
        {navbar.map(({ path, Element, id, hidden }) => {
          return /*!hidden &&*/<Route key={id} path={path} element={Element} />;
        })}
        <Route path='/' element={<Navigate to={'/home'} />} />
      </Route>
      
      {/* on not found page Navbar should not appear */}
        <Route path='*' element={<div>not found</div>} />
    </Routes>
  );
};

export default Root;
