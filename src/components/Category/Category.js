import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'


const Category = ({ category }) => {
    const { categoryImage, categoryTitle, categoryName, categoryId } = category
    return (
        <Card sx={{
            display: 'flex',
            backgroundColor: '#F4F5F6',
            height: '150px',
            position: 'relative',
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
                    <Typography variant="subtitle1" color="text.secondary" component="p">
                        {categoryTitle}
                    </Typography>
                    <Button variant='outlined' component={RouterLink} to={`/posts/${categoryId}`} sx={{
                        position: 'absolute',
                        bottom: '10px'
                    }}
                    >See All Posts</Button>
                </CardContent>
            </Box>
        </Card>
    );
};

export default Category;