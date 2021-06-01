import React from "react";
import { useParams } from "react-router-dom";
import SanityClient from "../../helpers/client";
import { imageUrlFor } from "../../helpers/image-url";
import PortableText from "../objects/portableText";
import MorePosts from "./more-posts";
import { ParamType, Project, Image, OtherPosts } from "./IfcProject";

const ProjectPost: React.FC = () => {
	const [postData, setPostData] = React.useState<Project>();
	const [otherPosts, setOtherPosts] = React.useState<OtherPosts[]>([]);
	const { slug } = useParams<ParamType>();
	React.useEffect(() => {
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
			.catch(console.error);
	}, [slug]);
	React.useEffect(() => {
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
			.catch(console.error);
	}, [slug]);
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

	if (!postData) return <p>Loading...</p>;
	console.log(postData.mainImage.asset.url);
	return (
		<article className="sm:w-12/12 mx-auto">
			<figure className="w-full h-full">
				<img
					src={getImageSource(postData.mainImage.asset.url)}
					alt={postData.mainImage.alt}
					className="w-full h-[400px] object-cover"
				/>
			</figure>
			<h2 className=" text-2xl md:text-7xl uppercase mt-8 mb-4 ">
				{postData.title && postData.title}
			</h2>
			<div className="flex items-center">
				{postData.categories &&
					postData.categories.map((category, index) => (
						<p className="font-fahkwang uppercase text-xl" key={index}>
							{category}
						</p>
					))}
				<i className="mx-4 text-4xl font-bold">{Dot}</i>
				<time className="text-xl font-fahkwang">
					{new Date(postData.publishedAt).toLocaleDateString("en-GB")}
				</time>
			</div>
			<div className="mt-4 mb-8">
				{postData.body && <PortableText blocks={postData.body} />}
			</div>
			<div className="grid md:grid-cols-6 grid-flow-row-dense gap-6 justify-items-stretch place-items-stretch">
				{postData.gallery &&
					postData.gallery.images &&
					postData.gallery.images.map((img: Image) => {
						return (
							<div
								key={img._key}
								className={`w-full h-full`}
								style={{
									gridColumnStart:
										window.innerWidth > 750 ? `${img.columnStart}` : "",
									gridColumnEnd:
										window.innerWidth > 750 ? `${img.columnEnd}` : "",
									gridRowStart:
										window.innerWidth > 750 ? `${img.rowStart}` : "",
									gridRowEnd: window.innerWidth > 750 ? `${img.rowEnd}` : "",
								}}
							>
								<img
									src={getImageSource(img.asset._ref)}
									alt={img.alt}
									className={`w-full h-full object-cover`}
								/>
							</div>
						);
					})}
			</div>
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
