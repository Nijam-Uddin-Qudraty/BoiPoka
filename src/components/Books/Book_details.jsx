import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Book_details = () => {
	const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId)
	const book = data.find((book) => book.bookId === id);
	console.log(book);
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={book.image}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">{book.bookName}</h1>
						<p className="py-6">
							By : {book.author}
                        </p>
                        <p><span>Review : </span>{ book.category}</p>
                        <p>{ book.review}</p>
                        <div><span>Tag</span>{
                            book.tags.map((tag) => {
                                <p>{ tag}</p>
                            })
                        }</div>
                        <p>Publisher : {book.publisher }</p>
                        <p>Year of Publishing : {book.yearOfPublishing}</p>
                        <div>

                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-primary">WishList</button>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book_details;
