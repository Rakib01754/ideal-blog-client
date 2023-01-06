import { Divider, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SinglePostCard from '../../SinglePostCard/SinglePostCard';

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    console.log(allPosts)

    useEffect(() => {
        fetch('http://localhost:5000/allposts')
            .then(res => res.json())
            .then(data => {
                setAllPosts(data)
            })
    }, [])
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
            }}>Posts</Typography>
            <Typography variant='h6' component='p' sx={{
                fontSize: ['15px', '20px', '25px']
            }}>Browse all the posts from here</Typography>

            <Grid container spacing={2}>
                {
                    allPosts.map(post =>
                        <SinglePostCard key={post._id} post={post}></SinglePostCard>
                    )
                }
            </Grid>

        </Stack>
    );
};

export default AllPosts;