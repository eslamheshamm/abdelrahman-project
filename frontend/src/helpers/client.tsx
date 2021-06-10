import sanityClient from "@sanity/client";
export default sanityClient({
	projectId: "nvgzml10",
	dataset: "production",
	apiVersion: "2021-03-25",
	useCdn: false,
});
