import React, { useEffect, useState } from 'react';

import { createContext } from 'react';
import Navbar from './parent route/Navbar';
import Footer from './parent route/Footer';
import { Outlet } from 'react-router-dom';


export const BookDataContext = createContext([]); 
const Root = () => {
    const [booksApi, setBooksApi] = useState([]);
    useEffect(() => {
        fetch("booksData.json").then(data => data.json()).then(data => setBooksApi(data))
    }, [])

    return (

        <div className="max-w-6xl mx-auto">
            <BookDataContext.Provider value={booksApi}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </BookDataContext.Provider>
        </div>
    );
};

export default Root;