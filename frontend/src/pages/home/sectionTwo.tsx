import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../components/assets/cinematography.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SectionTwo: React.FC = () => {
	return (
		<article className="w-11/12 mx-auto justify-items-center grid-rows-2 md:grid-rows-1 grid md:grid-cols-2 gap-6">
			<div className="h-full ">
				<h2 className=" text-3xl md:text-7xl">
					Project <br className="hidden md:block xl:hidden" /> Title
				</h2>
				<p className="my-4 w-11/12 ">
					The goal of Verdiv is to provide the same type of water (taste,
					quality, price) as mainstream drinking water brands but without using
					single-use plastic bottles and using metal cans and paper cartons
					instead. This environment-friendly approach to drinking water will
					hopefully encourage people to take steps to change their consumption
					habits not just with water but with other goods. As more mainstream
					brands adapt more environment-friendly ways not just with their
					commercial products but with their production processes, our brand
					believes sustainable businesses will become more common and we would
					like to be a part of that transition.
				</p>
				<Link to="/galleries" className=" text-lg font-fahkwang font-bold">
					View
				</Link>
			</div>
			<div className="grid  h-full gap-2 w-full row-start-1  md:row-start-auto ob ">
				<figure className="h-full  ">
					<LazyLoadImage
						src={backgroundImage}
						alt="home"
						effect="blur"
						width="100%"
						height="100%"
						className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-center"
					/>
				</figure>
			</div>
		</article>
	);
};
export default SectionTwo;
