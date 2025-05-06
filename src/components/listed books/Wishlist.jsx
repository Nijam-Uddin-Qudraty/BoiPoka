import React, { useContext } from 'react';
import Book from '../Books/Book';
import { StoreContext } from '../Root';
const Wishlist = () => {
    const [, wishlist] = useContext(StoreContext);
    return (
        <div>
            {
                wishlist.map((book)=><Book book={book}></Book>)
            }
        </div>
    );
};

export default Wishlist;