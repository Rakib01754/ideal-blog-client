import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link as RouterLink } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { useQuery } from '@tanstack/react-query';


const MemberChoice = () => {
    const { data: topPost = [] } = useQuery({
        queryKey: ['totalPost'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/mostLiked')
            const data = await res.json()
            return data;
        }


    })

    const BoxWrapper = styled(Box)(({ theme }) => ({
        marginBottom: '2rem',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse'
        }

    }))
    return (
        <>
            {
                topPost.map(post =>
                    <BoxWrapper key={post._id}>
                        <Stack spacing={2} sx={{
                            width: ['100%', '100%', '50%', '50%']
                        }}>
                            <SectionTitle>Member's Choice</SectionTitle>
                            <Typography variant='h2' component='h2' sx={{
                                fontSize: ['24px', '36px', '60px'],
                                fontWeight: 'bold'
                            }}>
                                {post?.title}
                            </Typography>
                            <Typography variant='h6' component='p'>
                                {post?.details ? post?.details.slice(0, 150) + '...' : post?.details}
                            </Typography>
                            <Typography variant='p' component='p' sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Avatar alt={post?.authorName} src={post?.authorImage} sx={{
                                    marginRight: 2
                                }} />
                                Posted By <span style={{
                                    fontWeight: 'bold',
                                    marginLeft: '8px'
                                }}> {post?.authorName}</span>
                            </Typography>
                            <Box>
                                <Button component={RouterLink} to={`/post/${post._id}`} variant='outlined' endIcon={<ArrowRightAltIcon />} sx={{
                                    backgroundColor: 'white',
                                    color: 'primary.orange',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}>
                                    Read More
                                </Button>
                            </Box>

                        </Stack>
                        <Box sx={{
                            width: ['100%', '100%', '50%', '50%']
                        }}>
                            <img src={post?.postImage} alt="" style={{
                                width: '100%',
                                height: '100%',
                                padding: "20px"
                            }} />
                        </Box>
                    </BoxWrapper>
                )
            }
        </>

    );
};

export default MemberChoice;