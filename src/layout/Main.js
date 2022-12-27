import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </Box>

    );
};

export default Main;