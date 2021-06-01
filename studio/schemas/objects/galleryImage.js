export default {
	name: "galleryImage",
	type: "image",
	title: "Image",
	options: {
		hotspot: true,
	},
	fields: [
		{
			name: "alt",
			type: "string",
			title: "Alternative text",
			description: "Important for SEO and accessibility.",
			options: {
				isHighlighted: true,
			},
		},
		{
			name: "columnStart",
			type: "number",
			title: "Grid Column Start",
		},
		{
			name: "columnEnd",
			type: "number",
			title: "Grid Column End",
		},
		{
			name: "rowStart",
			type: "number",
			title: "Grid Row Start",
		},
		{
			name: "rowEnd",
			type: "number",
			title: "Grid Row End",
		},
	],
	preview: {
		select: {
			imageUrl: "asset.url",
		},
	},
};
