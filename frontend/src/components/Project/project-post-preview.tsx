import React from "react";
import { Link } from "react-router-dom";
import { imageUrlFor } from "../../helpers/image-url";
import { Exhibition } from "../../pages/exhibition";
import PortableText from "../objects/portableText";

interface Props extends Exhibition {}
const ProjectPostPreview: React.FC<Props> = (props) => {
	const { mainImage } = props;
	const getImageSource = (): string | undefined => {
		if (mainImage) {
			const url = imageUrlFor(props.mainImage.asset.url)
				.fit("clip")
				.width(1200)
				.height(Math.floor((16 / 17) * 1200))
				.auto("format")
				.url();
			if (url) {
				return url;
			}
		}
	};
	return (
		<section className="flex flex-col">
			<Link to={props.slug && `/project/${props.slug.current}`}>
				{props.mainImage && props.mainImage.asset && (
					<img
						src={getImageSource()}
						className="hover:cursor-auto"
						alt={props.mainImage.alt ? props.mainImage.alt : undefined}
					/>
				)}
			</Link>
			<Link to={props.slug && `/project/${props.slug.current}`}>
				<h1 className="mt-4 mb-2 uppercase text-2xl lg:text-3xl hover:underline">
					{props.title}
				</h1>
			</Link>
			{props.excerpt && <PortableText blocks={props.excerpt} />}
		</section>
	);
};

export default ProjectPostPreview;
