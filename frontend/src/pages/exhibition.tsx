import React from "react";
import SanityClient from "../helpers/client";
import ProjectPostPreviewGrid from "../components/Project/press-post-preview-list";

interface Excerpt {
	children: Excerpt[];
	style: string;
	_key: string;
	_type: string;
}
export interface Exhibition {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	mainImage: {
		asset: {
			url: string;
		};
		alt: string | null;
	};
	excerpt: Excerpt[];
}

const ExhibitionScreen = () => {
	const [posts, setPosts] = React.useState<Exhibition[]>([]);
	React.useEffect(() => {
		SanityClient.fetch<Exhibition[]>(
			`
			*[_type == 'post'] {
				_id,
				title, 
				slug{
					current
				},
				mainImage{
					asset->{
						url
					},
					alt
				},
				excerpt
		}
    `
		).then((data) => {
			setPosts(data);
			console.log(data, "data");
		});
	}, []);
	return (
		<>
			<ProjectPostPreviewGrid data={posts} />
		</>
	);
};
export default ExhibitionScreen;
