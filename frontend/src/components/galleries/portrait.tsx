import React, { useEffect, useState } from "react";
import SanityClient from "../../helpers/client";
interface Gallery {
	images: [];
}
interface Excerpt {
	children: Excerpt[];
	style: string;
	_key: string;
	_type: string;
}

interface PortraitProps {
	title: string;
	_id: string;
	gallery: Gallery;
	mainImage: {
		asset: {
			url: string;
		};
		alt: string | null;
	};
	excerpt: Excerpt[];
}
const PortraitScreen = () => {
	const [posts, setPosts] = useState<PortraitProps[]>([]);
	useEffect(() => {
		SanityClient.fetch<PortraitProps[]>(
			`
			*[_type == 'portrait'] {
				_id,
				title, 
				mainImage{
					asset->{
						url
					},
					alt
				},
            excerpt,
				gallery {
					images[] {
						asset->{ url}
					} 
				}
		}
    `
		).then((data) => {
			setPosts(data);
			console.log(data);
		});
	}, []);
	console.log(posts);
	return (
		<section className="text-4xl">
			<h2>Hello !!</h2>
		</section>
	);
};

export default PortraitScreen;
