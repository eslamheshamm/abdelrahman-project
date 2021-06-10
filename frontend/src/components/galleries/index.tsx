import React, { useEffect, useState } from "react";
import SanityClient from "../../helpers/client";
import { PortraitProps, ParamType, Image } from "./types";
import { useParams } from "react-router-dom";
import PortableText from "../objects/portableText";
import { imageUrlFor } from "../../helpers/image-url";
import { SRLWrapper } from "simple-react-lightbox";
import { useMediaQuery } from "react-responsive";

const GalleryScreen: React.FC = () => {
	const [data, setData] = useState<PortraitProps[]>([]);
	const [error, setError] = useState(null);
	const { id } = useParams<ParamType>();
	const isNotMobile = useMediaQuery({ minWidth: 768 });
	const options = {
		buttons: {
			backgroundColor: "#161616cc",
			iconColor: "rgba(221, 221, 221, 0.8)",
			iconPadding: "10px",
			showAutoplayButton: false,
			showCloseButton: true,
			showDownloadButton: false,
			showFullscreenButton: false,
			showNextButton: true,
			showPrevButton: true,
			showThumbnailsButton: false,
			size: "30px",
		},
	};
	const getImageSource = (image: string): string | undefined => {
		if (data) {
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
	useEffect(() => {
		SanityClient.fetch<PortraitProps[]>(
			`
			*[_type == "${id}"] {
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
					images 
				}
		}
    `
		)
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				setError(error);
				console.log(error);
			});
	}, [id]);

	let gallery = data[0];
	if (error)
		return (
			<div
				className="  border-l-4 bg-yellow-200 border-yellow-500 w-11/12 mx-auto text-orange-700 p-4"
				role="alert"
			>
				<p className="font-bold">500 Internal Server Error Oh no!</p>
				<p>
					Something bad happened. Please come back later when we fixed that
					problem. Thanks.
				</p>
			</div>
		);
	if (!data) return <p className="text-4xl text-center">loading...</p>;
	return (
		<section className="w-10/12 mx-auto">
			<h2 className="uppercase text-3xl sm:text-4xl md:text-7xl text-center ">
				{gallery && gallery.title}
			</h2>
			{gallery && gallery.excerpt && (
				<div className="my-4 text-xl text-center w-11/12 md:w-3/4 mx-auto">
					<PortableText blocks={gallery.excerpt} />{" "}
				</div>
			)}
			<SRLWrapper options={options}>
				{gallery &&
					gallery.mainImage &&
					gallery.mainImage.asset &&
					gallery.mainImage.asset.url && (
						<figure className="w-full h-full">
							<img
								src={getImageSource(gallery.mainImage.asset.url)}
								alt={gallery.mainImage.alt}
								className="w-full h-[400px] object-cover hover:cursor-[zoom-in]"
							/>
						</figure>
					)}
				<div className=" grid grid-cols-2 md:grid-cols-6 grid-flow-row-dense gap-2 md:gap-8 justify-items-stretch place-items-stretch mt-2 md:mt-6">
					{gallery &&
						gallery.gallery &&
						gallery.gallery.images &&
						gallery.gallery.images.map((img: Image, index) => {
							return (
								<div
									key={index}
									className={`w-full h-full`}
									style={{
										gridColumnStart: isNotMobile ? `${img.columnStart}` : "",
										gridColumnEnd: isNotMobile ? `${img.columnEnd}` : "",
										gridRowStart: isNotMobile ? `${img.rowStart}` : "",
										gridRowEnd: isNotMobile ? `${img.rowEnd}` : "",
									}}
								>
									<img
										src={getImageSource(img.asset._ref)}
										alt={img.alt}
										className={`w-full h-full object-cover hover:cursor-[zoom-in]`}
									/>
								</div>
							);
						})}
				</div>
			</SRLWrapper>
		</section>
	);
};

export default GalleryScreen;
