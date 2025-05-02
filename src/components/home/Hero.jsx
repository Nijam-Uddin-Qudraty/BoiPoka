import React from "react";
import hero_img from '../../assets/pngwing 1.png'
const Hero = () => {
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src={hero_img}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
						
						<button className="btn btn-primary">View The list</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
