import { Divider, Grid, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from '../../Category/Category';


const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    })
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
            }}>Categories</Typography>
            <Typography variant='h6' component='p' sx={{
                fontSize: ['15px', '20px', '25px']
            }}>Browse through all our content</Typography>

            <Grid container spacing={2}>
                {
                    categories.map(category =>
                        <Grid key={category._id} item xs={12} sm={12} md={6} lg={4}>
                            <Category category={category}></Category>
                        </Grid>)
                }
            </Grid>

        </Stack>
    );
};

export default Categories;