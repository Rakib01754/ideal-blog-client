import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Link as RouterLink } from 'react-router-dom'

const CarouselItem = ({ featuredPost }) => {
    const { category, postImage, title, _id } = featuredPost
    return (
        <>
            <Stack spacing={2} sx={{
                height: '70vh',
                width: '100%',
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                '&>img': {
                    position: 'absolute',
                    width: '100%',
                    height: '80vh',
                    zIndex: '-1',
                    filter: 'brightness(40%)'
                },
                '&:not(img)': {
                    position: 'relative',
                    zIndex: '1'
                }


            }}>
                <img src={postImage} alt="" />
                <Container>
                    <Typography variant='caption' component='p' sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: '700',
                        color: '#fff'
                    }}> <span><LocalOfferOutlinedIcon sx={{
                        marginRight: 1
                    }} /></span>{category}</Typography>
                    <Typography variant='h2' sx={{
                        fontSize: ['30px', '45px', '70px'],
                        color: '#fff'
                    }}>
                        {title}
                    </Typography>
                    <Box>
                        <Button component={RouterLink} to={`/post/${_id}`} variant='text' endIcon={<ArrowRightAltIcon />} sx={{
                            color: '#fff',
                            borderBottom: '2px solid white',
                            '&:hover': {
                                color: 'primary.orange',
                                borderBottom: `2px solid #FC4501`,
                            }
                        }}>
                            Read More
                        </Button>
                    </Box>
                </Container>
            </Stack>
        </>

    );
};

export default CarouselItem;