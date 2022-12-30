import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CarouselItem = ({ item }) => {
    const { name, image } = item
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
                    zIndex: '-1',
                    filter: 'blur(5px)'
                },
                '&:not(img)': {
                    position: 'relative',
                    zIndex: '1'
                }


            }}>
                <img src={image} alt="" />
                <Container>
                    <Typography variant='h1' sx={{
                        fontSize: ['40px', '60px', '100px'],
                        color: '#fff'
                    }}>
                        {name}
                    </Typography>
                    <Box>
                        <Button variant='text' endIcon={<ArrowRightAltIcon />} sx={{
                            color: 'white',
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