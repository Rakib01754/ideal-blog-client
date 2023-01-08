import { Box, Button, Grid, Stack } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import SinglePostCard from '../../../SinglePostCard/SinglePostCard';
import { Link as RouterLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';

const HomePosts = () => {
    const { data: allPosts = [] } = useQuery({
        queryKey: ['allPosts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/homeposts')
            const data = await res.json()
            return data;
        }
    })

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
                    <Button component={RouterLink} to='/allposts' variant='outlined' sx={{
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}>View All</Button>
                </Box>
            </Stack>
        </>
    );
};

export default HomePosts;