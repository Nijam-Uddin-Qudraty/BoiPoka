import React from 'react';
import { Link } from "react-router-dom";
const Book = ({book}) => {
    return (
        <div>
            <Link to={`/book/${book.bookId}`} >
					<div className="card bg-base-100 min-w-96 h-full shadow-sm p-6 flex flex-col rounded-2xl">
					
					
					<figure className="bg-blue-200 px-24 py-8 rounded-2xl">
							<img className='h-40' src={book.image} alt="book" />
						</figure>
					
					<div className="mt-6 space-y-4">
						<div className='flex gap-3'>

							{book.tags.map((tag) => (
								<p className="badge badge-outline ">{tag}</p>
							))}
						</div>
							<h2 className="card-title">
								{book.bookName}
								<div className="badge badge-secondary">NEW</div>
							</h2>
						<p >By : {book.author}</p>
							<div className="border-t-2 border-dashed border-gray-300"></div>
							<div className="card-actions flex justify-between">
								<div className="">{book.category}</div>
							<p>{book.rating}</p>
							<p>{book.totalPages}</p>
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
				</Link>
        </div>
    );
};

export default Book;