import React, { useContext } from 'react';
import Book from "./Book"
import { StoreContext } from '../Root';
const Wishlist = () => {
    const [, wishlist] = useContext(StoreContext);
    
    return (
        <div>
            {   wishlist.length >0?
                wishlist.map((book)=><Book book={book}></Book>): <p className='text-secondary'>No No books were added</p>
            }
        </div>
    );
};

export default Wishlist;