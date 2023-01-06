import { Container } from '@mui/material';
import React from 'react';
import BlogCarousel from './BlogCarousel/BlogCarousel';
import HomePosts from './HomePosts/HomePosts';
import MemberChoice from './MembersChoice/MemberChoice';
// import PopularCategories from './PopularCategories/PopularCategories';
import SubscribeArea from './SubscribeArea/SubscribeArea';

const Home = () => {
    return (

        <div>
            <BlogCarousel></BlogCarousel>
            <Container>
                <MemberChoice></MemberChoice>
                <HomePosts></HomePosts>
                <SubscribeArea></SubscribeArea>
            </Container>
        </div>

    );
};

export default Home;