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
	to: any;
}
interface Gallery {
	title: string;
	id: string;
	alt: string;
	img: string;
}
export const GallerImagePreview: React.FC<ImageProps> = (props) => {
	const { alt, img, title, to } = props;
	return (
		<Link to={to}>
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
};

const galleries: Gallery[] = [
	{
		title: "portrait",
		id: "portrait",
		alt: "portrait",
		img: portrait,
	},
	{
		title: "documentary",
		id: "documentary",
		alt: "documentary",
		img: documentary,
	},

	{
		title: "cinematography",
		id: "cinematography",
		alt: "cinematography",
		img: cinematography,
	},
	{
		title: "street",
		id: "street",
		alt: "street",
		img: street,
	},
	{
		title: "commercialShots",
		id: "commercialShots",
		alt: "commercial-shots",
		img: commercialShots,
	},
];
const Galleries: React.FC = () => {
	return (
		<section>
			{galleries.map(({ img, alt, id, title }) => {
				return (
					<GallerImagePreview
						img={img}
						title={title}
						to={`/gallery/${id}`}
						alt={alt}
						key={id}
					/>
				);
			})}
		</section>
	);
};
export default Galleries;
