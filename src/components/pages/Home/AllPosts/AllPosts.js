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
            image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        },
        {
            id: '02',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        },
        {
            id: '03',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        },
        {
            id: '04',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
        },
        {
            id: '05',
            author: 'Rakib',
            category: 'Category',
            title: 'Name',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos.',
            image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
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