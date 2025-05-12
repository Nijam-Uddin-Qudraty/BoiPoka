import React from "react";
import { IoLocationOutline } from "react-icons/io5";
const Book = ({ book }) => {
	return (
		<div className="card bg-base-100 min-w-96 h-full shadow-sm p-6 grid grid-cols-3 rounded-2xl">
			<figure className="w-60 bg-blue-200 px-14 py-8 rounded-2xl">
				<img className="h-32" src={book.image} alt="book" />
			</figure>

			<div className="my-auto space-y-4 col-span-2">
				
				<h2 className="card-title">
					{book.bookName}
					<div className="badge badge-secondary">NEW</div>
				</h2>
                <p>By : {book.author}</p>
                <div className="flex gap-3">
                    <span><strong>Tag </strong></span>
					{book.tags.map((tag) => (
						<p className="badge badge-outline badge-primary bg-blue-50 ">#{tag}</p>
					))}
                </div>
                <p>
                    <span><IoLocationOutline></IoLocationOutline></span> Year of Publishing: {book.yearOfPublishing}
                </p>
				</div>
                </div>
	);
};

export default Book;