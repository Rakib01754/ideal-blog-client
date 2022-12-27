import { Container } from '@mui/material';
import React from 'react';
import AllPosts from './AllPosts/AllPosts';
import BlogCarousel from './BlogCarousel/BlogCarousel';
import MemberChoice from './MembersChoice/MemberChoice';
import PopularCategories from './PopularCategories/PopularCategories';

const Home = () => {
    return (

        <div>
            <BlogCarousel></BlogCarousel>
            <Container>
                <MemberChoice></MemberChoice>
                <AllPosts></AllPosts>
                <PopularCategories></PopularCategories>
            </Container>
        </div>

    );
};

export default Home;