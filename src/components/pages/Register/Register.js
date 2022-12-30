import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Link, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { signUp, googleSignIn } = useContext(AuthContext)
    const [type, setType] = React.useState('');
    const navigate = useNavigate()

    const provider = new GoogleAuthProvider()

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const gender = form.gender.value;
        const userType = form.userType.value;

        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success(`${userType} registtaion success`)
                updateProfile(user, {
                    displayName: name,
                })
                    .then(result => {
                        toast.success('Profile Updated')
                        navigate('/')
                    })
                    .catch(error => {
                        const errorMessage = error.message;
                        toast.success(errorMessage)
                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.success(errorMessage)
            })
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
                console.log(errorMessage)
            });
    }



    const gridStyle = {
        width: '350px',
    }
    const paperStyle = {
        padding: '20px'
    }
    const linkStyle = {
        textAlign: 'left',
        marginLeft: 2
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid style={gridStyle} align='center'>
                <Paper elevation={20} style={paperStyle}>
                    <Box><ControlPointOutlinedIcon sx={{
                        color: 'primary.orange',
                        fontSize: '30px'
                    }} /></Box>
                    <Typography variant='h5' component='h2' fontWeight='bold'>Sign Up</Typography>
                    <Typography variant='caption' component='p' marginBottom='20px'>Please Enter the valid Information and register</Typography>
                    <form onSubmit={handleFormSubmit}>
                        <Stack spacing={2}>
                            <TextField type="text" label="Enter Your Name" name='name' variant="outlined" fullWidth />
                            <TextField name='email' type="email" label="Enter Your Email" variant="outlined" fullWidth />
                            <TextField
                                name='password'
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                            />
                            <FormControl>
                                <FormLabel sx={{
                                    textAlign: 'left'
                                }}>Gender</FormLabel>
                                <RadioGroup
                                    name='gender'
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <Typography>
                                Account Type?
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    name='userType'
                                    value={type}
                                    label="Type"
                                    onChange={handleChange}
                                >
                                    <MenuItem value='author'>Author</MenuItem>
                                    <MenuItem value='visitor'>Visitor</MenuItem>

                                </Select>
                            </FormControl>
                            <Button variant='outlined' type='submit' sx={{
                                '&:hover': {
                                    color: 'black'
                                }
                            }}>Register</Button>
                            <Divider>OR</Divider>
                            <Button
                                onClick={handleGoogleLogin}
                                variant='outlined' sx={{
                                    '&:hover': {
                                        color: 'black'
                                    }
                                }}><GoogleIcon sx={{
                                    marginRight: 2
                                }} />Sign In With Google</Button>

                            <Typography variant='caption' component='p' marginBottom='10px' style={linkStyle}>Already have an account? <Link color='primary.orange' component={RouterLink} to='/login'>Login</Link>
                            </Typography>
                        </Stack>
                    </form>

                </Paper>
            </Grid>
        </Box>
    );
};

export default Register;