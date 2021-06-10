import { Link } from "react-router-dom";
import { ImageProps } from "./types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const GalleryImagePreview: React.FC<ImageProps> = (props) => {
	const { alt, img, title, to } = props;
	return (
		<Link to={to}>
			<figure className="w-full h-[385px] relative text-center cursor-auto">
				<LazyLoadImage
					src={img}
					alt={alt}
					effect="blur"
					width="100%"
					height="100%"
					className="w-full h-full object-cover object-center"
				/>
				<figcaption className="absolute top-1/2 left-1/2 transform	-translate-y-1/2 -translate-x-2/4	 font-fahkwang uppercase text-white text-4xl md:text-6xl cursor-pointer hover:underline">
					{title}
				</figcaption>
			</figure>
		</Link>
	);
};

export default GalleryImagePreview;
