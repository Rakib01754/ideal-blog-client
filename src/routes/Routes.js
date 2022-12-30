import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Categories from '../components/pages/Categories/Categories';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import Register from '../components/pages/Register/Register';
import Main from '../layout/Main';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/categories',
                    element: <Categories></Categories>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;