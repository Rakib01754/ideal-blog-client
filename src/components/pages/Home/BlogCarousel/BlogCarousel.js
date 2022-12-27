import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../../../CarouselItem/CarouselItem';

const BlogCarousel = () => {
    const items = [
        {
            name: "Random Name #1",
            image: 'https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000'

        },
        {
            name: "Random Name #2",
            image: 'https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000'
        }
    ]
    return (
        <Carousel>
            {
                items.map((item, i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    );
};

export default BlogCarousel;