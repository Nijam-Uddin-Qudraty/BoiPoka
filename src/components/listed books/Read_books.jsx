import React, { useContext } from 'react';
import Book from './Book';
import { StoreContext } from '../Root';

const Read_books = () => {
    const [read_books_list, ] = useContext(StoreContext);

    return (
        <div>
            {  read_books_list.length >0?
                read_books_list.map((book)=><Book book={book}></Book>): <p className='text-secondary'>No books were added</p>
            }
        </div>
    );
};

export default Read_books;