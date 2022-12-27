import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const MemberChoice = () => {

    const BoxWrapper = styled(Box)(({ theme }) => ({
        marginBottom: '2rem',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse'
        }

    }))
    return (
        <BoxWrapper>
            <Stack spacing={3}>
                <SectionTitle>Member's Choice</SectionTitle>
                <Typography variant='h2' component='h2' sx={{
                    fontSize: ['24px', '36px', '60px'],
                    fontWeight: 'bold'
                }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, itaque?
                </Typography>
                <Typography variant='h6' component='p' fontWeight='bold'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nesciunt blanditiis assumenda quas necessitatibus? Atque architecto voluptatibus quam mollitia veniam.
                </Typography>
                <Typography variant='p' component='p'>
                    Posted By Rakib
                </Typography>
                <Box>
                    <Button variant='contained' endIcon={<ArrowRightAltIcon />} sx={{
                    }}>
                        Read More
                    </Button>
                </Box>

            </Stack>
            <Box width='100%'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU" alt="" style={{
                    width: '100%',
                    height: '100%',
                    padding: "20px"
                }} />
            </Box>
        </BoxWrapper>

    );
};

export default MemberChoice;