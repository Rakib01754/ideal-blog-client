import { Box, Button, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import SinglePostCard from '../../../SinglePostCard/SinglePostCard';


const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                setAllPosts(data)
            })
    }, [])
    return (
        <>
            <SectionTitle>
                All Our Posts
            </SectionTitle>
            <Stack spacing={2}>
                <Grid container spacing={2} sx={{
                    marginTop: 4
                }}>
                    {
                        allPosts.map(post => <SinglePostCard key={post.id} post={post}></SinglePostCard>)
                    }
                </Grid>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button variant='outlined' sx={{
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}>View All</Button>
                </Box>
            </Stack>
        </>
    );
};

export default AllPosts;