import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './shared/Footer';
import Header from './shared/Header';

const Main = () => {
    const categories = useLoaderData();
    return (
        <div className='relative min-h-screen'>
            <Header categories={categories}></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;