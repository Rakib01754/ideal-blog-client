import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ProfileEditModal from '../../ProfileEditModal/ProfileEditModal';

const Profile = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user } = useContext(AuthContext)
    const { data: currentUser = {}, refetch } = useQuery({
        queryKey: ['currentUser', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    return (
        <Stack>
            <Paper sx={{ width: ['80%', '60%', '50%', '40%'], margin: '20px auto' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px 0px'
                }}>
                    <img src={currentUser?.picture} alt="currentUser?.name" style={{
                        width: '40%',
                        borderRadius: '50%',
                    }} />
                </Box>
                <Typography variant='span' fontWeight='bold'>

                </Typography>
                <Typography variant='h4' component='h4' fontWeight='bold' textAlign='center'>{currentUser?.name}</Typography>
                <Typography variant='h6' component='p' fontWeight='bold' textAlign='center'>{currentUser?.userTitle}</Typography>
                <Typography variant='h6' component='p' textAlign='center' textTransform='capitalize'>   <Typography variant='span' fontWeight='bold'>
                    Gender
                </Typography>: {currentUser?.gender}</Typography>
                <Typography variant='h6' component='p' textAlign='center'><Typography variant='span' fontWeight='bold'>
                    Email
                </Typography>: {currentUser?.email}</Typography>
                <Typography variant='h6' component='p' textAlign='center' textTransform='capitalize'><Typography variant='span' fontWeight='bold'>
                    Status
                </Typography>: {currentUser?.userType}</Typography>
                <Typography variant='h6' component='p' textAlign='center' padding='15px'>{currentUser?.about}</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px 0px'
                }}>

                    <Button variant='outlined' onClick={handleOpen} sx={{
                        color: 'primary.orange'
                    }}>Edit Details</Button>
                </Box>
            </Paper>
            <ProfileEditModal open={open} handleClose={handleClose} currentUser={currentUser} refetch={refetch}></ProfileEditModal>
        </Stack>
    );
};

export default Profile;