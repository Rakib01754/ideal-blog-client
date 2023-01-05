import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePostCard from '../../SinglePostCard/SinglePostCard';

const CategoryWisePosts = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <Stack spacing={3}>
            <Divider sx={{
                margin: '20px 0px 0px 0px',
                backgroundColor: 'primary.orange',
                width: '80px',
                height: '3px'
            }}></Divider>
            <Typography variant='h2' component='h2' fontWeight='bold' sx={{
                fontSize: ['20px', '30px', '40px']
            }}>Posts From {posts[0].category} Category</Typography>

            <Grid container spacing={2}>

                {
                    posts.map(post => <SinglePostCard key={post.id} post={post}></SinglePostCard>)
                }

            </Grid>

        </Stack>
    );
};

export default CategoryWisePosts;