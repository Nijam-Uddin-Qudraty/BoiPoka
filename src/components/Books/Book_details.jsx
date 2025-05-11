import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useContext } from "react";
import { HandleStoreContext } from "../Root";

const Book_details = () => {
	// context
	const handleBtn = useContext(HandleStoreContext);
	// showing book details
	const { bookId } = useParams();
	const data = useLoaderData();
	const id = parseInt(bookId);
	const book = data.find((book) => book.bookId === id);
	return (
		<>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col gap-12 lg:flex-row">
					<div className="p-8 md:p-18 bg-blue-100">
						<img
						src={book.image}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					</div>
					<div>
						<h1 className="text-4xl md:text-5xl font-bold">{book.bookName}</h1>
						<p className="py-6">By : {book.author}</p>
						<hr />
						<p className="my-4">{book.category}</p>
						<hr />
						<p className="my-6 text-sm md:text-base">
							{" "}
							<span className="font-bold">Review : </span>
							{book.review}
						</p>
						<div className="flex gap-3">
							<span className="my-2">Tag</span>

							{book.tags.map((tag) => (
								<div className="bg-sky-50 rounded-xl text-primary">
									<p className="m-2">#{tag}</p>
								</div>
							))}
						</div>
						<hr className="my-6" />
					
							<div className="grid grid-cols-2 gap-y-3 text-sm">
								<p>Number of Pages:</p>
								<p>
									<strong>{book.totalPages}</strong>
								</p>

								<p>Publisher:</p>
								<p>
									<strong>{book.publisher}</strong>
								</p>

								<p>Year of Publishing:</p>
								<p>
									<strong>{book.yearOfPublishing}</strong>
								</p>

								<p>Rating:</p>
								<p>
									<strong>{book.rating}</strong>
								</p>
						

							<div className="flex gap-6 mt-8">
								<button
									className="btn btn-outline p-7"
									onClick={() => handleBtn(event, book)}
								>
									Read
								</button>
								<button
									className="btn btn-secondary p-7"
									onClick={() => handleBtn(event, book)}
								>
									WishList
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Book_details;
