import { Container, Divider, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterWrapper = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 0px',
    margin: '20px 0px'
}))

const Footer = () => {
    return (
        <Container>
            <FooterWrapper direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} spacing={2}>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        fontWeight: 700,
                        color: 'black',
                        textDecoration: 'none',
                        '&:hover': {
                            color: 'primary.orange'
                        }
                    }}
                >
                    Ideal Blogs
                </Typography>

                <Stack spacing={2} direction='row'>
                    <FacebookIcon />
                    <TwitterIcon></TwitterIcon>
                    <InstagramIcon></InstagramIcon>
                    <LinkedInIcon></LinkedInIcon>
                </Stack>
            </FooterWrapper>
            <Divider sx={{
                backgroundColor: 'primary.main',
            }} />
            <Typography fontWeight='bold' margin='20px 0px'>Ideal Blogs &copy; 2022 All Rights Reserved</Typography>

        </Container>
    );
};

export default Footer;