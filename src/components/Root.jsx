import React, { useEffect, useState } from 'react';

import { createContext } from 'react';
import Navbar from './parent route/Navbar';
import Footer from './parent route/Footer';
import { Outlet } from 'react-router-dom';

export const Store_readBookContext = createContext([]);
export const Store_wishlistContext = createContext([]);
export const BookDataContext = createContext([]); 
const Root = () => {
    // state for passing json data
    const [booksApi, setBooksApi] = useState([]);
    useEffect(() => {
        fetch("booksData.json").then(data => data.json()).then(data => setBooksApi(data))
    }, [])
    // states for keeping read_list_books
    const [read_books_list, setRead_books_list] = useState([]);
	const [wishlist, setWishlist] = useState([]);
    const handleDataStoring=(event,book)=>{
        event.innerText === "Read"? setRead_books_list((prev)=>[...prev,book]): setWishlist((prev)=>[...prev,book])
    }
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