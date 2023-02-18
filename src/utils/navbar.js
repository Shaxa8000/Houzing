import useId from '../hooks/useId';
import Home from '../pages/Home';
import Properties from '../pages/Properties';


export const navbar = [
    {
        id: useId,
        title: 'Home',
        path: '/home',
        element: <Home/>,
        private: false,
        hidden: false,
    },
    {
        id: useId,
        title: 'Properties',
        path: '/properties',
        element: <Properties/>,
        private: false,
        hidden: false,
    },
]