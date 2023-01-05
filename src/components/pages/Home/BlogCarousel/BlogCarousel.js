import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../../../CarouselItem/CarouselItem';

const BlogCarousel = () => {

    const [featuredPosts, setFeaturedPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/adminChoiches')
            .then(response => {
                const data = response.data;
                setFeaturedPosts(data)
            })
    }, [])

    return (
        <Carousel sx={{
            marginBottom: '30px'
        }}>
            {
                featuredPosts.map((featuredPost, idx) => <CarouselItem key={idx} featuredPost={featuredPost} />)
            }
        </Carousel>
    );
};

export default BlogCarousel;