import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../../../CarouselItem/CarouselItem';

const BlogCarousel = () => {

    const { data: featuredPosts = [] } = useQuery({
        queryKey: ['featuredPosts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/adminChoiches')
            const data = await res.json()
            return data;

        }
    })

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