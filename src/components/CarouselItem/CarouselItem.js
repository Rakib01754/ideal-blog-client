import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CarouselItem = ({ item }) => {
    const { name, image } = item
    return (
        <>
            <Stack spacing={2} sx={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '70vh',
                width: '100%',
                backdropFilter: 'blur(20px)',
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center'

            }}>
                <Container>
                    <Typography variant='h1' sx={{
                        fontSize: ['40px', '60px', '100px'],
                        color: '#fff'
                    }}>
                        {name}
                    </Typography>
                    <Box>
                        <Button variant='contained' endIcon={<ArrowRightAltIcon />}>
                            Read More
                        </Button>
                    </Box>
                </Container>
            </Stack>
        </>

    );
};

export default CarouselItem;