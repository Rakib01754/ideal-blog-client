import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <Box backgroundColor='primary.main'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </Box>

    );
};

export default Main;