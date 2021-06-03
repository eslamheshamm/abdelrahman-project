import React from "react";
import { Link } from "react-router-dom";
import portrait from "../components/assets/portrait.png";
import documentary from "../components/assets/documentary.png";
import cinematography from "../components/assets/cinematography.png";
import street from "../components/assets/street.png";
import commercialShots from "../components/assets/commercial-shots.png";

interface ImageProps {
	title: string;
	img: string;
	alt: string;
	link: string;
}
const Image: React.FC<ImageProps> = ({ title, img, alt, link }) => (
	<Link to={link}>
		<figure className="w-full h-[385px] relative text-center cursor-auto">
			<img
				src={img}
				alt={alt}
				className="w-full h-full object-cover object-center"
			/>
			<figcaption className="absolute top-1/2 left-1/2 transform	-translate-y-1/2 -translate-x-2/4	 font-fahkwang uppercase text-white text-4xl md:text-6xl cursor-pointer hover:underline">
				{title}
			</figcaption>
		</figure>
	</Link>
);
const Galleries: React.FC = () => {
	return (
		<section className="h-full">
			<Image img={portrait} title="portrait" link="/galleries" alt="portrait" />
			<Image
				img={documentary}
				title="documentary"
				link="/galleries"
				alt="documentary"
			/>
			<Image
				img={cinematography}
				title="cinematography"
				link="/galleries"
				alt="cinematography"
			/>
			<Image img={street} title="street" link="/galleries" alt="street" />
			<Image
				img={commercialShots}
				title="commercialShots"
				link="/galleries"
				alt="commercialShots"
			/>
		</section>
	);
};
export default Galleries;
