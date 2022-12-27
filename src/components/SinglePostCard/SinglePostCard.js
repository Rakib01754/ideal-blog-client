import React, { useState } from 'react';
import { Box, Grid, Stack, styled, Typography } from '@mui/material';

const SinglePostCard = ({ post }) => {
    const { author, category, title, details, image } = post
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const StyledCard = styled(Stack)(({ theme }) => ({
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '300px',
        padding: '1rem',
        borderRadius: '10px',
    }))
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}
            >
                <StyledCard color='primary.main' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

                    <Box>
                        <Typography variant='p' >
                            {author}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="p" fontWeight='700'>
                            {category}
                        </Typography>
                        <Typography variant="h5" fontWeight='700'>
                            {title}
                        </Typography>
                        {
                            isHovering &&
                            (<Typography variant="p">
                                {details}
                            </Typography>)
                        }
                    </Box>
                </StyledCard>
            </Grid>
        </>

    );
};

export default SinglePostCard;