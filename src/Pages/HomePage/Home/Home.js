import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import MenuHeader from '../Menu/MenuHeader';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MenuHeader></MenuHeader>

            <Outlet />
        </div>
    );
};

export default Home;