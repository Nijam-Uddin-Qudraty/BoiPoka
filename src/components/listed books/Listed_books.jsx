import React from "react";

const Listed_books = () => {
	return (
		<div>
			<div>
				<h2>Books</h2>
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-primary rounded-field"
					>
						Sort by:
					</div>
					<ul
						tabIndex={0}
						className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
					>
						<li>
							<a>Rating</a>
						</li>
						<li>
							<a>Number of pages</a>
						</li>
						<li>
							<a>Publishing Year</a>
						</li>
					</ul>
				</div>
				{/* name of each tab group should be unique */}
				<div className="tabs tabs-border">
					<input
						type="radio"
						name="my_tabs_2"
						className="tab"
						aria-label="Tab 1"
					/>
					<div className="tab-content border-base-300 bg-base-100 p-10">
						Read books
					</div>

					<input
						type="radio"
						name="my_tabs_2"
						className="tab"
						aria-label="Tab 2"
						defaultChecked
					/>
					<div className="tab-content border-base-300 bg-base-100 p-10">
						Wishlisht Books
					</div>

					
				</div>
			</div>
		</div>
	);
};

export default Listed_books;
