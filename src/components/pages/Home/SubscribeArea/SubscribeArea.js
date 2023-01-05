import { Box, Button, Stack, styled, TextField, Typography } from '@mui/material';
import React from 'react';

const SubscribeArea = () => {

    const SubscribeBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        margin: '60px 0px',
        padding: '30px',
        backgroundColor: '#F4F5F6',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column'
        }
    }))
    return (
        <SubscribeBox>
            <Box sx={{
                width: ['100%', '100%', '100%', '85%']
            }}>
                <Typography variant='h4' component='h4' fontWeight='bold' textAlign='center' sx={{
                    fontSize: ['25px', '25px', '40px']
                }}>
                    Subscribe to our newsletter
                </Typography>
                <Typography variant='p' component='p' textAlign='center'>
                    Receive the latests news, curated posts and highlights from us. We'll never spam, we promise
                </Typography>
            </Box>
            <Stack spacing={3} direction={{ xs: 'column', sm: 'row' }} sx={{
                padding: '20px 30px',
                width: '100%'
            }}>
                <TextField
                    id="outlined-email-input"
                    label="Enter Your Email"
                    type="text"
                    fullWidth
                />
                <Button variant='text' sx={{
                    borderBottom: '1px solid',
                    '&:hover': {
                        color: 'primary.main'
                    }
                }}>Subscribe</Button>
            </Stack>
        </SubscribeBox>
    );
};

export default SubscribeArea;