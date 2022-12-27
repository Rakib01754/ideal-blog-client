import { Box, Button, Grid, Stack } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import SinglePostCard from '../../../SinglePostCard/SinglePostCard';


const AllPosts = () => {
    const postItems = [
        {
            id: '01',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU'
        },
        {
            id: '02',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU'
        },
        {
            id: '03',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU'
        },
        {
            id: '04',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU'
        },
        {
            id: '05',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU'
        },

    ]
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
                        postItems.map(post => <SinglePostCard key={post.id} post={post}></SinglePostCard>)
                    }
                </Grid>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button variant='contained'>View All</Button>
                </Box>
            </Stack>
        </>
    );
};

export default AllPosts;