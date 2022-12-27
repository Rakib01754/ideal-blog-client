import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ children }) => {
    return (
        <Typography color='primary.orange' fontWeight='bold'>
            {children}
        </Typography>
    );
};

export default SectionTitle;