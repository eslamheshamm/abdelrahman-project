import React from "react";
import SanityClient from "../helpers/client";
import ProjectPostPreviewGrid from "../components/Project/press-post-preview-list";
const Exhibition = () => {
	const [postData, setPost] = React.useState(null);
	React.useEffect(() => {
		SanityClient.fetch(
			`
			*[_type == 'post'] {
				title, 
			  slug,
			  mainImage{
				asset->{
				  id,
				  url
				},
				alt
			  }
		}
    `
		).then((data) => {
			setPost(data);
			console.log(data, "data");
		});
	}, []);
	return (
		<section>
			<ProjectPostPreviewGrid data={postData} />
		</section>
	);
};
export default Exhibition;
