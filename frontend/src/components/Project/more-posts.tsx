import React from "react";
import { Link } from "react-router-dom";
import { imageUrlFor } from "../../helpers/image-url";

interface Posts {
	_id: string;

	slug: {
		current: string;
	};
	mainImage: {
		asset: {
			url: string;
		};
		alt: string | "No Caption";
	};
}
interface Props {
	posts: Posts[];
}
const MorePosts: React.FC<Props> = (props) => {
	const { posts } = props;

	const getImageSource = (image: string): string | undefined => {
		if (posts) {
			const url = imageUrlFor(image)
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
		<div className="my-16">
			<h2 className="font-fahkwang uppercase text-2xl mb-8">
				enjoy your eyes!
			</h2>
			<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
				{posts &&
					posts.map((post) => (
						<Link to={post.slug && `/project/${post.slug.current}`}>
							<img
								src={getImageSource(post.mainImage && post.mainImage.asset.url)}
								alt={post.mainImage && post.mainImage.alt}
							/>
						</Link>
					))}
			</div>
		</div>
	);
};

export default MorePosts;
