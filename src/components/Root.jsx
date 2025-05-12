import React, { useEffect, useState } from "react";

import { createContext } from "react";
import Navbar from "./parent route/Navbar";
import Footer from "./parent route/Footer";
import { Outlet } from "react-router-dom";

export const StoreContext = createContext([]);
export const HandleStoreContext = createContext();
export const BookDataContext = createContext([]);
const Root = () => {
	// state for passing json data
	const [booksApi, setBooksApi] = useState([]);
	useEffect(() => {
		fetch("booksData.json")
			.then((data) => data.json())
			.then((data) => setBooksApi(data));
	}, []);
	// states for keeping read_list_books
	const [read_books_list, setRead_books_list] = useState([]);
	const [wishlist, setWishlist] = useState([]);
	

	const handleDataStoring = (event, book) => {
		if (event.target.innerText === "Read") {
			const exists = read_books_list.find(
				(prev) => prev.bookId === book.bookId
			);
			if (!exists) {
				setRead_books_list([...read_books_list, book]);
				const newWishlist = wishlist.filter((prev) => prev.bookId !== book.bookId);
setWishlist([...newWishlist]);
			}
		} else {
			const alreadyAddedtoRead = read_books_list.find((prev)=>prev.bookId == book.bookId)
			const exists = wishlist.find(
				(prev) => ((prev.bookId === book.bookId))
			);
			
			if (!exists && !alreadyAddedtoRead) {
				setWishlist([...wishlist, book]);
			}
		}
	};

	return (
		<div className="max-w-6xl mx-auto">
			<BookDataContext.Provider value={booksApi}>
				<StoreContext.Provider value={[read_books_list, wishlist,setRead_books_list,setWishlist]}>
					<HandleStoreContext.Provider value={handleDataStoring}>
						<Navbar></Navbar>
						<Outlet></Outlet>
					</HandleStoreContext.Provider>
				</StoreContext.Provider>
				<Footer></Footer>
			</BookDataContext.Provider>
		</div>
	);
};

export default Root;
