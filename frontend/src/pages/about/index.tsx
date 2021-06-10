import React from "react";
import profile from "../../components/assets/profile.png";
const About: React.FC = () => {
	return (
		<section className="grid md:grid-cols-2 gap-8 lg:gap-20 w-10/12 mx-auto place-items-center  ">
			<div className="w-full h-full place-self-end flex justify-center items-center object-cover">
				<figure className="w-full h-full">
					<img src={profile} alt="w-full h-full object-cover" />
				</figure>
			</div>
			<div>
				<h2 className="text-4xl md:text-5xl lg:text-6xl">
					Abdelrahman <br className="hidden md:block" /> Ibrahim
				</h2>
				<p className="mt-6 text-lg">
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
			</div>
		</section>
	);
};
export default About;
