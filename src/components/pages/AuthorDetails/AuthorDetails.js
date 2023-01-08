import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePostCard from '../../SinglePostCard/SinglePostCard';

const AuthorDetails = () => {
    const authorData = useLoaderData()
    const { name, picture, userTitle, _id, email, about, gender, userType } = authorData
    const { data: posts = [] } = useQuery({
        queryKey: ['posts', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/posts?email=${email}`)
            const data = await res.json()
            return data;
        }
    })


    return (
        <Stack spacing={2}>
            <Typography variant='h4' component='h4' fontWeight='bold'>Details And Posts of {name}</Typography>
            <Paper sx={{
                width: ['100%', '60%', '40%', '40%']
            }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Box sx={{ width: '40%' }}>
                        <img src={picture} alt="" style={{ width: '100%', height: '150px' }} />
                    </Box>
                    <Box sx={{ width: '60%', padding: '8px' }}>
                        <Typography variant='h6' to={`../user/${_id}`} sx={{
                            fontWeight: 'bold',
                            color: 'primary.orange',
                        }}>
                            {name}
                        </Typography>
                        <Typography variant='p' component='p' sx={{ display: 'flex', gap: '10px' }}>
                            <Typography variant='span' component='p' fontWeight='bold'>Email:</Typography>{email}
                        </Typography>
                        <Typography variant='p' component='p' sx={{ display: 'flex', gap: '10px', textTransform: 'capitalize' }} >
                            <Typography variant='span' component='p' fontWeight='bold'>Title:</Typography>{userTitle ? userTitle : ''}
                        </Typography>
                        <Typography variant='p' component='p' sx={{ display: 'flex', gap: '10px', textTransform: 'capitalize' }} >
                            <Typography variant='span' component='p' fontWeight='bold'>Status:</Typography>{userType ? userType : ''}
                        </Typography>
                        <Typography variant='p' component='p' sx={{ display: 'flex', gap: '10px', textTransform: 'capitalize' }} >
                            <Typography variant='span' component='p' fontWeight='bold'>Gender:</Typography>{gender ? gender : ''}
                        </Typography>
                    </Box>


                </Box>
                <Box>
                    <Typography variant='display2' component='p' sx={{
                        padding: '10px'
                    }}>
                        {about ? about : ''}
                    </Typography>
                </Box>
            </Paper>
            <Typography variant='h6' component='h4' fontWeight='bold' color='primary.orange'>Total Posts {posts.length}</Typography>
            <Grid container spacing={2}>
                {
                    posts.map(post =>
                        <SinglePostCard key={post._id} post={post}></SinglePostCard>
                    )
                }
            </Grid>
        </Stack>

    );
};

export default AuthorDetails;