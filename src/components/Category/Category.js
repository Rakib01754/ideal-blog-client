import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Category = ({ category }) => {
    const { categoryImage, categoryTitle, categoryName } = category
    return (
        <Card sx={{
            display: 'flex',
            backgroundColor: '#F4F5F6',
            height: '150px',
            '&:hover': {
                boxShadow: '10px 10px 5px gray'
            }

        }}>
            <CardMedia
                component="img"
                sx={{ width: '30%', padding: '10px' }}
                image={categoryImage}
                alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography component="div" variant="h6">
                        {categoryName}
                    </Typography>
                    <Typography component="div" variant="p">
                        {category.totalPost} Posts
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="p">
                        {categoryTitle}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default Category;