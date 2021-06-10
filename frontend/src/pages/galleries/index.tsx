import React from "react";
import { galleries } from "./galleries";
import GalleryImagePreview from "./ImagePreview";

const Galleries: React.FC = () => {
	return (
		<section className="w-11/12 mx-auto">
			{galleries.map(({ img, alt, id, title }) => {
				return (
					<GalleryImagePreview
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
