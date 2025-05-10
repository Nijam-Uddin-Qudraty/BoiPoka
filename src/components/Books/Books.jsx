import React, { useContext } from "react";
import { BookDataContext } from "../Root.jsx";
import { Link } from "react-router-dom";
import Book from "./Book.jsx";

const Books = () => {
	const books = useContext(BookDataContext);
	return (
		<div className="">
			<div>
				<h1 className="text-4xl font-bold text-center">Books</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{books.map((book) => (
				<Book book = {book}></Book>
				
			))}
			</div>
			
		</div>
	);
};

export default Books;
