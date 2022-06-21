import React from 'react';
import DetailesPage from '../pages/Details';
import Generic from '../pages/Generic';
import Home from '../pages/Home';
import PropertiesPage from '../pages/Properties';
import Signin from '../pages/Signin';
import Register from '../pages/Register';
import MyProperties from '../pages/MyProperties';
import AddHouse from '../pages/AddHouse';
//components

export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    Element: <Home />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: 'Properties',
    path: '/properties',
    Element: <PropertiesPage />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: '2-1',
    title: 'Properties',
    path: '/properties/:id',
    Element: <DetailesPage />,
    search: '?',
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 3,
    title: 'Contacts',
    path: '/contacts',
    Element: <Generic />,
    param: true,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: 'Signin',
    path: '/signin',
    Element: <Signin />,
    search: '?',
    param: true,
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: 'Sign Up',
    path: '/signup',
    Element: <Register />,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 6,
    title: 'MyProperties',
    path: '/profile/properties',
    Element: <MyProperties />,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 7,
    title: 'Add New House',
    path: '/profile/add',
    Element: <AddHouse />,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 8,
    title: 'Add New House',
    path: '/profile/add/:id',
    Element: <AddHouse />,
    search: '?',
    hidden: true,
    private: false,
  },
];
