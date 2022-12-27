import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const PopularCategory = ({ category }) => {
    return (
        <Card sx={{
            display: 'flex',
            '&:hover': {
                boxShadow: '10px 10px 5px gray'
            }

        }}>
            <CardMedia
                component="img"
                sx={{ width: '40%' }}
                image="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {category.name}
                    </Typography>
                    <Typography component="div" variant="p">
                        {category.totalPost} Posts
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {category.shortDesc}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default PopularCategory;