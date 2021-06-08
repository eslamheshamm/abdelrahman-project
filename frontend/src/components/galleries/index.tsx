import React, { useEffect, useState } from "react";
import SanityClient from "../../helpers/client";
import { PortraitProps, ParamType, Image } from "./types";
import { useParams } from "react-router-dom";
import PortableText from "../objects/portableText";
import { imageUrlFor } from "../../helpers/image-url";
import { SRLWrapper } from "simple-react-lightbox";
import { useMediaQuery } from "react-responsive";

const GalleryScreen = () => {
	const { id } = useParams<ParamType>();

	const isNotMobile = useMediaQuery({ minWidth: 768 });

	const [data, setData] = useState<PortraitProps[]>([]);
	const options = {
		buttons: {
			showDownloadButton: false,
			showAutoplayButton: false,
			showThumbnailsButton: false,
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
		).then((data) => {
			setData(data);
		});
	}, [id]);
	let gallery = data[0];
	if (!gallery) <p className="text-4xl text-center">loading...</p>;
	return (
		<section className="">
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
