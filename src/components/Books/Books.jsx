import React, { useContext } from "react";
import { BookDataContext } from "../Root.jsx";
const Books = () => {
	const books = useContext(BookDataContext);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{books.map((book) => (
				<div className="card bg-base-100 w-96 shadow-sm">
					<figure>
						<img src={book.image} alt="book" />
					</figure>
					<div className="card-body">
						{book.tags.map((tag) => (
							<p className="badge badge-outline">{tag}</p>
						))}
						<h2 className="card-title">
							{book.bookName}
							<div className="badge badge-secondary">NEW</div>
						</h2>
						<p>By : {book.author}</p>
						<div className="card-actions flex justify-between">
							<div className="">{book.category}</div>
							<div className="rating">
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									aria-label="1 star"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									aria-label="2 star"
									defaultChecked
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									aria-label="3 star"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									aria-label="4 star"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									aria-label="5 star"
								/>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Books;
