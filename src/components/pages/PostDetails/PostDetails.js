import { Avatar, Box, Button, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link as RouterLink } from 'react-router-dom'

const PostDetails = () => {
    const post = useLoaderData()
    const { authorImage, authorName, postedDate, category, title, details, totalLike, postImage } = post
    const [topPost, setTopPost] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/mostLiked')
            .then(res => res.json())
            .then(data => {
                setTopPost(data)
            })
    }, [])
    return (
        <Grid sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'column', 'row'],
            gap: 4

        }}>
            <Box sx={{
                width: ['100%', '100%', '100%', '70%']
            }}>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: 2 }}>
                    <Avatar src={authorImage}>
                    </Avatar> By <span style={{ fontWeight: 'bold' }}>{authorName}</span>
                </Typography>
                <Typography variant='h2' component='h2'>{title}</Typography>
                <Box sx={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}><LocalOfferOutlinedIcon sx={{
                        marginRight: 1
                    }} />{category}</Typography>
                    <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}><AccessTimeOutlinedIcon sx={{
                        marginRight: 1
                    }} />{postedDate}</Typography>
                </Box>
                <Box><img src={postImage} alt="postimage" width='100%' height='400px' /></Box>
                <Typography variant='p' component='p'>{details}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Total Like: {totalLike} </Typography>
                    <IconButton sx={{ color: 'primary.orange' }}><ThumbUpOutlinedIcon /></IconButton>


                </Box>
            </Box>

            <Box sx={{
                width: ['100%', '100%', '100%', '25%']
            }}>
                <Box sx={{ marginBottom: '20px' }}>
                    <Typography variant='subtitle1' color='primary.orange' component='p' marginBottom='20px' fontWeight='bold' sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><AccountCircleOutlinedIcon />About The Authors</Typography>
                    <Paper width='80%' mx='auto'>
                        <CardActionArea>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: ['left', 'left', 'left', 'center'] }}>
                                <CardMedia
                                    sx={{
                                        width: '30%'
                                    }}
                                    component="img"
                                    image={authorImage}
                                    alt=""
                                />
                                <Typography variant="h5" component="div" fontWeight='bold' marginLeft='10px'>
                                    {authorName}
                                </Typography>
                            </Box>
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Paper>
                </Box>
                <Box>
                    <Typography variant='subtitle1' color='primary.orange' component='p' marginBottom='20px' fontWeight='bold' sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}><AccountCircleOutlinedIcon />Members Choice</Typography>
                    <Grid container spacing={2} sx={{
                        marginTop: 4
                    }}>
                        <Grid container>
                            {


                                topPost.map(post => <Grid key={post._id} item xs={12} sm={6} md={6} lg={12}>
                                    <Paper width='80%' mx='auto'>

                                        <CardActionArea>
                                            <CardMedia sx={{ width: '100%' }}
                                                component="img"
                                                height="140"
                                                image={post.postImage}
                                                alt={post.title}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {post.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {post.details}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary" component={RouterLink} to={`/post/${post._id}`}>
                                                Read More
                                            </Button>
                                        </CardActions>
                                    </Paper>
                                </Grid>)
                            }
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Grid>
    );
};

export default PostDetails;