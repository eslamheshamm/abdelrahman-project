import React from "react";
import { Link } from "react-router-dom";
import { imageUrlFor } from "../../helpers/image-url";
import PortableText from "../objects/portableText";
interface Props {
	props: {};
	title: "string";
	excerpt: [];
	slug: {
		current: string;
	};
	mainImage: {
		asset: {};
		alt: string;
	};
}
const ProjectPostPreview: React.FC<Props> = (props) => {
	console.log(props, "excerpt");
	return (
		<section className="flex flex-col">
			<Link to={props.slug.current}>
				{props.mainImage && props.mainImage.asset && (
					<img
						src={
							props.mainImage &&
							imageUrlFor(props.mainImage)
								.fit("clip")
								.width(1200)
								.height(Math.floor((16 / 17) * 1200))
								.auto("format")
								.url()
						}
						className="hover:cursor-auto"
						alt={props.mainImage.alt}
					/>
				)}
			</Link>
			<Link to={props.slug.current}>
				<h1 className="mt-4 mb-2 uppercase text-2xl lg:text-3xl hover:underline">
					{props.title}
				</h1>
			</Link>
			{props.excerpt && (
				<>
					<PortableText blocks={props.excerpt} />
				</>
			)}
		</section>
	);
};

export default ProjectPostPreview;
