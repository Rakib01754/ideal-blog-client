import { Box, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import Category from '../../../Category/Category';

const PopularCategories = () => {
    const categoriesData = [
        {
            name: 'Name',
            totalPost: 5,
            shortDesc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'Name',
            totalPost: 6,
            shortDesc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'Name',
            totalPost: 7,
            shortDesc: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'Name',
            totalPost: 8,
            shortDesc: 'Lorem ipsum dolor sit amet.'
        },
    ]

    const CategoriesBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        margin: '30px 0',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column-reverse'
        }

    }))
    return (
        <CategoriesBox>
            <Grid container spacing={2} sx={{
                width: ['100%', '100%', '100%', '80%']
            }}>
                {
                    categoriesData.map((category, idx) => <Grid key={idx} item xs={12} sm={6} md={6}>
                        <Category category={category}></Category>
                    </Grid>)
                }
            </Grid>
            <Stack spacing={2} sx={{
                padding: [0, 0, 0, 4],
                margin: '20px 0'
            }}>
                <Typography variant='h4' component='h1' fontWeight='bold'>Popular Categories</Typography>
                <Typography variant='p' component='p'>We have collected our most popular categories for you. Check out these popular topics!</Typography>

            </Stack>
        </CategoriesBox >
    );
};

export default PopularCategories;