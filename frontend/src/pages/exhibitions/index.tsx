import React, { useEffect, useState } from "react";
import SanityClient from "../../helpers/client";
import ExhibitonsPostPreviewGrid from "../../components/exhibitions/exhibition-post-preview-list";
interface Excerpt {
	children: Excerpt[];
	style: string;
	_key: string;
	_type: string;
}
interface Gallery {
	images: [];
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
	gallery: Gallery;
}

const ExhibitionScreen: React.FC = () => {
	const [posts, setPosts] = useState<Exhibition[]>([]);
	const [error, setError] = useState(null);
	useEffect(() => {
		SanityClient.fetch<Exhibition[]>(
			`
			*[_type == 'exhibitions'] {
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
				excerpt,
				gallery {
					images
				}
		}
    `
		)
			.then((data) => {
				setPosts(data);
				console.log(data);
			})
			.catch((error) => {
				setError(error);
				console.log(error);
			});
	}, []);
	if (error)
		return (
			<div
				className="  border-l-4 bg-yellow-200 border-yellow-500 w-10/12 mx-auto text-orange-700 p-4"
				role="alert"
			>
				<p className="font-bold">500 Internal Server Error Oh no!</p>
				<p>
					Something bad happened. Please come back later when we fixed that
					problem. Thanks.
				</p>
			</div>
		);
	if (!posts)
		return <p className="w-10/12 mx-auto text-3xl font-bold">Loading...</p>;

	return (
		<>
			<ExhibitonsPostPreviewGrid data={posts} />
		</>
	);
};
export default ExhibitionScreen;
