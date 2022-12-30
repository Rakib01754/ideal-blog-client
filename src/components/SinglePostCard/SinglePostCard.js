import React from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

const SinglePostCard = ({ post }) => {
    const { author, category, title, details, image } = post

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}
            >
                <Card sx={{
                    border: '0.5px solid black',
                    '&:hover': {
                        boxShadow: '10px 10px 5px gray'
                    }
                }} >
                    <CardHeader
                        avatar={
                            <Avatar>
                                R
                            </Avatar>
                        }
                        title={`By ${author}`}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt={title}
                    />
                    <CardContent>
                        <Typography variant="p" fontWeight='bold' color="text.primary">
                            {category}
                        </Typography>
                        <Typography variant="h6" fontWeight='bold' color="text.primary">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {details}
                        </Typography>
                        <Button variant='outlined' sx={{
                            mt: 2,
                            '&:hover': {
                                color: 'black'
                            }
                        }}>Read More</Button>
                    </CardContent>
                </Card>
            </Grid>
        </>

    );
};

export default SinglePostCard;