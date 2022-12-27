import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../../../CarouselItem/CarouselItem';

const BlogCarousel = () => {
    const items = [
        {
            name: "Random Name #1",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU'

        },
        {
            name: "Random Name #2",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU'
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