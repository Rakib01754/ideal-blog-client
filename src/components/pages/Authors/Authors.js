import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const Authors = () => {
    return (
        <Stack spacing={3}>
            <Divider sx={{
                margin: '20px 0px 0px 0px',
                backgroundColor: 'primary.orange',
                width: '80px',
                height: '3px'
            }}></Divider>
            <Typography variant='h2' component='h2' fontWeight='bold' sx={{
                fontSize: ['30px', '45px', '60px']
            }}>Authors</Typography>
            <Typography variant='h6' component='p' sx={{
                fontSize: ['15px', '20px', '25px']
            }}>Incredible people, incredible stories</Typography>

            <Grid container spacing={2}>
                <Typography>This is authors</Typography>
            </Grid>

        </Stack>
    );
};

export default Authors;