import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';
import Footer from '../components/Footer';
// import { Container } from "./style";

export const Root = () => {
  return (
    <>
      <Routes>
        <Route
          path='/profile'
          element={<Navigate to={'/profile/properties'} />}
        />
        <Route element={<Navbar />}>
          {navbar.map(({ path, Element, id, param }) => {
            return param && <Route key={id} path={path} element={Element} />;
          })}
        </Route>
        <Route element={<Navbar />}>
          {navbar.map(({ path, Element, id, hidden }) => {
            return (
              /*!hidden &&*/ <Route key={id} path={path} element={Element} />
            );
          })}
          <Route path='/' element={<Navigate to={'/home'} />} />
        </Route>
        <Route path='*' element={<div>page not found</div>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default Root;
