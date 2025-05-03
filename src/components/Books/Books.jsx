import React, { useContext } from 'react';
import { BookDataContext } from '../Root.jsx';
const Books = () => {
    const books = useContext(BookDataContext);
    const { bookId,bookName,author,image,category,tags } = books;
    return (
        <div>
            <h1>{books.length}</h1>
        </div>
    );
};

export default Books;