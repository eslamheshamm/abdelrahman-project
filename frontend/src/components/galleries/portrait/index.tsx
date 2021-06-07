import React, { useEffect, useState } from "react";
import SanityClient from "../../../helpers/client";
import { PortraitProps } from "./types";
import { useParams } from "react-router-dom";
const PortraitScreen = () => {
	console.log();
	const [data, setData] = useState<PortraitProps[]>([]);
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
			setData(data);
		});
	}, []);
	console.log(data[0]);
	return (
		<section className="text-4xl">
			<h2>Hello !!</h2>
		</section>
	);
};

export default PortraitScreen;
