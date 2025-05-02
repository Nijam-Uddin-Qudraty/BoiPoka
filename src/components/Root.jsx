import React from 'react';
import Navbar from './parent route/Navbar';
import Footer from './parent route/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;