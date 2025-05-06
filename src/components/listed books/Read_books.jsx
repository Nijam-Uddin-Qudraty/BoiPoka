import React, { useContext } from 'react';
import Book from '../Books/Book';
import { StoreContext } from '../Root';

const Read_books = () => {
    const [read_books_list] = useContext(StoreContext);
    return (
        <div>
            {
                read_books_list.map((book)=><Book book={book}></Book>)
            }
        </div>
    );
};

export default Read_books;