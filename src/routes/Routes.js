import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllPosts from '../components/pages/AllPosts/AllPosts';
import AuthorDetails from '../components/pages/AuthorDetails/AuthorDetails';
import Authors from '../components/pages/Authors/Authors';
import Categories from '../components/pages/Categories/Categories';
import CategoryWisePosts from '../components/pages/CategoryWisePosts/CategoryWisePosts';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import PostDetails from '../components/pages/PostDetails/PostDetails';
import Register from '../components/pages/Register/Register';
import Main from '../layout/Main';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/categories',
                    element: <Categories></Categories>
                },
                {
                    path: '/authors',
                    element: <Authors></Authors>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/allposts',
                    element: <AllPosts></AllPosts>
                },
                {
                    path: '/posts/:categoryId',
                    loader: ({ params }) =>
                        fetch(
                            `http://localhost:5000/posts/${params.categoryId}`
                        ),
                    element: <CategoryWisePosts></CategoryWisePosts>
                },
                {
                    path: '/post/:postId',
                    loader: ({ params }) =>
                        fetch(
                            `http://localhost:5000/post/${params.postId}`
                        ),
                    element: <PostDetails></PostDetails>
                },
                {
                    path: '/user/:userId',
                    loader: ({ params }) =>
                        fetch(
                            `http://localhost:5000/user/${params.userId}`
                        ),
                    element: <AuthorDetails></AuthorDetails>
                },
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;