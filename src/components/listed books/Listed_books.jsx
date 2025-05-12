import { Link } from "react-router-dom";
import Read_books from "./Read_books";
import Wishlist from "./Wishlist";
import { useContext, useState } from "react";
import { StoreContext } from "../Root";

const Listed_books = () => {
	const [read_books_list, wishlist, setRead_books_list, setWishlist] = useContext(StoreContext);

	const [sort, setSort] = useState("");
	// sorting here
	const handleSort = (type) => {
		
		if (type === "Rating") {
			setSort(type)
			const sortReadList = [...read_books_list].sort(
				(a, b) => 
					a.rating - b.rating
			);
			
			setRead_books_list(sortReadList);
			const sortWishlist = [...wishlist].sort(
				(a, b) => a.ratings - b.ratings
			);
			setWishlist(sortWishlist);
			console.log("clicked");
		} else if (type === "Number of pages") {
			setSort(type)
			const sortReadList = [...read_books_list].sort(
				(a, b) => a.totalPages - b.totalPages
			);

			setRead_books_list(sortReadList);

			const sortWishlist = [...wishlist].sort(
				(a, b) => a.totalPages - b.totalPages
			);
			setWishlist(sortWishlist);
		} else if (type === "Publishing Year") {
			setSort(type)
			const sortReadList = [...read_books_list].sort(
				(a, b) => a.yearOfPublishing - b.yearOfPublishing
			);
			setRead_books_list(sortReadList);

			const sortWishlist = [...wishlist].sort(
				(a, b) => a.yearOfPublishing - b.yearOfPublishing
			);
			setWishlist(sortWishlist);
		}
		
	};
	return (
		<div>
			<div>
				{/* sort btn  */}
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-primary rounded-field"
					>
						Sort by : {sort}
					</div>
					<ul
						tabIndex={0}
						className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
					>
						<li>
							<a onClick={()=>handleSort("Rating")}>Rating</a>
						</li>
						<li>
							<a onClick={()=>handleSort("Number of pages")}>Number of pages</a>
						</li>
						<li>
							<a onClick={()=>handleSort("Publishing Year")}>Publishing Year</a>
						</li>
					</ul>
				</div>
				{/* name of each tab group should be unique */}
				{/* tabs  */}
				<div className="tabs tabs-border">
					<input
						type="radio"
						name="my_tabs_2"
						className="tab"
						aria-label="Read"
					/>
					<div className="tab-content border-base-300 bg-base-100 p-10">
						<Read_books></Read_books>
					</div>
					<input
						type="radio"
						name="my_tabs_2"
						className="tab"
						aria-label="Wishlist"
						defaultChecked
					/>
					<div className="tab-content border-base-300 bg-base-100 p-10">
						<Wishlist></Wishlist>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Listed_books;
