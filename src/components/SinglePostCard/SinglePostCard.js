import React from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'

const SinglePostCard = ({ post }) => {
    const { authorName, category, title, details, postImage, postedDate, authorImage, _id } = post

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}
            >
                <Card sx={{
                    border: '0.5px solid black',
                    height: '470px',
                    position: 'relative',
                    '&:hover': {
                        boxShadow: '10px 10px 5px gray'
                    }
                }} >
                    <CardHeader
                        avatar={
                            <Avatar src={authorImage}>
                            </Avatar>
                        }
                        title={`By ${authorName}`}
                        subheader={postedDate}
                    />
                    <CardMedia
                        component="img"
                        height="200px"
                        image={postImage}
                        alt={title}
                    />
                    <CardContent>
                        <Typography variant="p" fontWeight='bold' color="text.primary">
                            {category}
                        </Typography>
                        <Typography variant="subtitle1" component='p' fontWeight='bold' color="text.primary">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {details ? details.slice(0, 80) + '...' : details}
                        </Typography>
                        <Button variant='outlined' component={RouterLink} to={`/post/${_id}`} sx={{
                            position: 'absolute',
                            bottom: '10px',
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