import { Box, Button, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

const ProfileEditModal = ({ open, handleClose, currentUser, refetch }) => {
    const { name, picture, userType, email, gender, userTitle, about, _id } = currentUser
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const newName = form.name.value;
        const newTitle = form.userTitle.value;
        const newGender = form.gender.value;
        const newAbout = form.about.value;
        const userUpdatedData = {
            name: newName,
            picture,
            userTitle: newTitle,
            userType,
            email,
            gender: newGender,
            about: newAbout
        }

        fetch(`http://localhost:5000/userprofile/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userUpdatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Edit Successfull', {
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            color: '#713200',
                        },
                        iconTheme: {
                            primary: '#713200',
                            secondary: '#FFFAEE',
                        },
                    });
                    form.reset();
                    refetch()
                    handleClose(true)

                }
            })
            .catch(error => console.log(error))
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack sx={style} spacing={1}>
                <Typography variant='h5' component='h5' textAlign='center' fontWeight='bold'>Edit Your Details</Typography>
                <form onSubmit={handleFormSubmit}>
                    <Typography variant='h6'>Name:</Typography>
                    <TextField type="text" defaultValue={name} name='name' variant="outlined" fullWidth sx={{
                        marginBottom: 2
                    }} />
                    <Typography variant='h6'>Title:</Typography>
                    <TextField type="text" defaultValue={userTitle} name='userTitle' variant="outlined" fullWidth />
                    <FormControl>
                        <FormLabel sx={{
                            textAlign: 'left'
                        }}>Gender</FormLabel>
                        <RadioGroup
                            name='gender'
                            defaultValue={gender}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            required
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <Typography variant='h6'>About:</Typography>
                    <TextField
                        name='about'
                        maxLength="100"
                        multiline
                        rows={5}
                        defaultValue={about}
                        fullWidth
                    />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '10px 0px'
                    }}>

                        <Button type='submit' variant='outlined' sx={{
                            color: 'primary.orange'
                        }}>Update</Button>
                    </Box>
                </form>
            </Stack>
        </Modal>
    );
};

export default ProfileEditModal;