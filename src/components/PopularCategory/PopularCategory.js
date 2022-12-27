import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const PopularCategory = ({ category }) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: '40%' }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU"
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