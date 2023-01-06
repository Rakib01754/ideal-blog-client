import { Divider, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleAuthor from '../../SingleAuthor/SingleAuthor';

const Authors = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/authors')
            .then(res => res.json())
            .then(data => setAuthors(data))
    }, [])
    return (
        <Stack spacing={3}>
            <Divider sx={{
                margin: '20px 0px 0px 0px',
                backgroundColor: 'primary.orange',
                width: '80px',
                height: '3px'
            }}></Divider>
            <Typography variant='h2' component='h2' fontWeight='bold' sx={{
                fontSize: ['30px', '45px', '60px']
            }}>Our Authors</Typography>
            <Typography variant='h6' component='p' sx={{
                fontSize: ['15px', '20px', '25px']
            }}>Incredible people, incredible stories</Typography>

            <Grid container spacing={2}>
                {
                    authors.map(author =>
                        <Grid key={author._id} item xs={12} sm={12} md={6} lg={4}>
                            <SingleAuthor author={author}></SingleAuthor>
                        </Grid>
                    )
                }
            </Grid>

        </Stack>
    );
};

export default Authors;