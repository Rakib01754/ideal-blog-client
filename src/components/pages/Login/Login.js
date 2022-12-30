import { Box, Button, Divider, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const provider = new GoogleAuthProvider()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login Successfull');
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
        form.reset()
    }

    const handleGoogleLogin = () => {
        googleSignIn(provider)
            .then((result) => {
                const userType = 'Visitor'
                const user = result.user;
                console.log(user)
                toast.success(`${userType} Login Successful`)
                navigate('/')
            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }

    const gridStyle = {
        width: '350px'

    }
    const paperStyle = {
        padding: '20px'
    }
    const linkStyle = {
        textAlign: 'left',
        marginLeft: 2
    }
    return (
        <Box minHeight='90vh' sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid style={gridStyle} align='center'>
                <Paper elevation={20} style={paperStyle}>
                    <Box><LockOpenOutlinedIcon sx={{
                        color: 'primary.orange',
                        fontSize: '30px'
                    }} /></Box>
                    <Typography variant='h5' component='h2' fontWeight='bold'>Login</Typography>
                    <Typography variant='caption' component='p' marginBottom='20px'>Please Enter the valid Information to login</Typography>
                    <form onSubmit={handleFormSubmit}>
                        <Stack spacing={2}>
                            <TextField type="email" name='email' label="Enter Your Email" variant="outlined" fullWidth />
                            <TextField
                                name='password'
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                            />
                            <Link color='primary.orange' variant='caption' component={RouterLink} marginBottom='10px' style={linkStyle}>Forgot Password?? </Link>
                            <Button variant='outlined' type='submit' sx={{
                                '&:hover': {
                                    color: 'black'
                                }
                            }}>Login</Button>
                            <Divider>OR</Divider>
                            <Button
                                onClick={handleGoogleLogin}
                                variant='outlined' sx={{
                                    '&:hover': {
                                        color: 'black'
                                    }
                                }}><GoogleIcon sx={{
                                    marginRight: 2
                                }} /> Sign In With Google</Button>
                            <Typography variant='caption' component='p' marginBottom='10px' style={linkStyle}>Not Yet Registred? <Link color='primary.orange' component={RouterLink} to='/register'>Sign Up</Link>
                            </Typography>
                        </Stack>
                    </form>

                </Paper>
            </Grid>
        </Box>
    );
};

export default Login;