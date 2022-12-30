import { Divider, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Category from '../../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
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
            }}>Categories</Typography>
            <Typography variant='h6' component='p' sx={{
                fontSize: ['15px', '20px', '25px']
            }}>Browse through all our content</Typography>

            <Grid container spacing={2}>
                {
                    categories.map(category =>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Category key={category.id} category={category}></Category>
                        </Grid>)
                }
            </Grid>

        </Stack>
    );
};

export default Categories;