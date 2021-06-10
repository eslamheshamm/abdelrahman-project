import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SanityClient from "../../helpers/client";
import { imageUrlFor } from "../../helpers/image-url";
import PortableText from "../objects/portableText";
import MorePosts from "./more-posts";
import { ParamType, Project, Image, OtherPosts } from "./types";
import { SRLWrapper } from "simple-react-lightbox";
import { useMediaQuery } from "react-responsive";

const ProjectPost: React.FC = () => {
	const [postData, setPostData] = useState<Project>();
	const [otherPosts, setOtherPosts] = useState<OtherPosts[]>([]);
	const [error, setError] = useState(null);
	const { slug } = useParams<ParamType>();
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
		if (postData) {
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
		SanityClient.fetch<Project[]>(
			`
	 *[slug.current == "${slug}"] 
			{
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
						body,	
					gallery {
						images
					},
					publishedAt,
					"categories": categories[]->title,
			}
    		`
		)
			.then((data) => {
				setPostData(data[0]);
			})
			.catch((error) => {
				setError(error);
				console.log(error);
			});

		SanityClient.fetch<OtherPosts[]>(
			`
		*[_type == "post" && slug.current != "${slug}"]| order(publishedAt desc) [0..3]
		{ 
				_id,
					slug{
						current
					},
				mainImage{
					asset->{
					url
					},
					alt
				},
	
				
		  }
				`
		)
			.then((data) => {
				setOtherPosts(data);
				console.log("preview", data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [slug]);
	let post = postData!;

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
	if (!post)
		return <p className="w-11/12 mx-auto text-3xl font-bold">Loading...</p>;

	return (
		<article className="w-11/12 mx-auto">
			<figure className="w-full h-full">
				<img
					src={getImageSource(post.mainImage.asset.url)}
					alt={post.mainImage.alt}
					className="w-full h-[400px] object-cover"
				/>
			</figure>
			<h2 className=" text-2xl md:text-7xl uppercase mt-8 mb-4 ">
				{post.title && post.title}
			</h2>
			<div className="flex items-center">
				{post.categories &&
					post.categories.map((category, index) => (
						<p className="font-fahkwang uppercase text-xl" key={index}>
							{category}
						</p>
					))}
				<i className="mx-4 text-4xl font-bold">{Dot}</i>
				<time className="text-xl font-fahkwang">
					{new Date(post.publishedAt).toLocaleDateString("en-GB")}
				</time>
			</div>
			<div className="mt-4 mb-8">
				{post.body && <PortableText blocks={post.body} />}
			</div>
			<SRLWrapper options={options}>
				<div className="grid md:grid-cols-6 grid-flow-row-dense gap-8 justify-items-stretch place-items-stretch">
					{post.gallery &&
						post.gallery.images &&
						post.gallery.images.map((img: Image) => {
							return (
								<div
									key={img._key}
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

			<MorePosts posts={otherPosts} />
		</article>
	);
};
const Dot = (
	<svg
		width="8"
		height="8"
		viewBox="0 0 8 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="4" cy="4" r="4" fill="black" />
	</svg>
);

export default ProjectPost;
// row-start-${img.rowStart} row-end-${img.rowEnd}
