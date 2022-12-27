import { Box, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import PopularCategory from '../../../PopularCategory/PopularCategory';

const PopularCategories = () => {
    const categoriesData = [
        {
            id: '01',
            name: 'Name',
            totalPost: 5,
            shortDesc: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: '02',
            name: 'Name',
            totalPost: 6,
            shortDesc: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: '03',
            name: 'Name',
            totalPost: 7,
            shortDesc: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: '04',
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
                width: ['100%', '100%', '100%', '70%']
            }}>
                {
                    categoriesData.map(category => <Grid item xs={12} sm={6} md={6}>
                        <PopularCategory key={category.id} category={category}></PopularCategory>
                    </Grid>)
                }
            </Grid>
            <Stack spacing={2} sx={{
                padding: [0, 0, 0, 8],
                margin: '20px 0'
            }}>
                <Typography variant='h4' component='h1' fontWeight='bold'>Popular Categories</Typography>
                <Typography variant='p' component='p'>We have collected our most popular categories for you. Check out these popular topics!</Typography>

            </Stack>
        </CategoriesBox >
    );
};

export default PopularCategories;