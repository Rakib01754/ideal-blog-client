import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'

const SingleAuthor = ({ author }) => {
    const { name, picture, userTitle, _id } = author
    return (
        <Paper>
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Box sx={{ width: '40%' }}>
                    <img src={picture} alt="" style={{ width: '100%', height: '150px' }} />
                </Box>
                <Box sx={{ width: '60%', padding: '8px' }}>
                    <Typography variant='h6' component={RouterLink} to={`../user/${_id}`} sx={{
                        fontWeight: 'bold',
                        color: 'primary.orange',
                    }}>
                        {name}
                    </Typography>
                    <Typography variant='p' component='p' textTransform='capitalize' sx={{ display: 'flex', gap: '10px' }}>
                        <Typography variant='span' component='p' fontWeight='bold'>Title:</Typography>{userTitle ? userTitle : ''}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default SingleAuthor;