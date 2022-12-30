import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../../../CarouselItem/CarouselItem';

const BlogCarousel = () => {
    const items = [
        {
            name: "Random Name #1",
            image: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80'

        },
        {
            name: "Random Name #2",
            image: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80'
        }
    ]
    return (
        <Carousel sx={{
            marginBottom: '30px'
        }}>
            {
                items.map((item, i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    );
};

export default BlogCarousel;