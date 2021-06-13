export default {
	name: "exhibitions",
	title: "exhibitions",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "excerpt",
			title: "Summery",
			type: "excerptPortableText",
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "mainImage",
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
		{
			name: "gallery",
			type: "gallery",
		},
	],

	preview: {
		select: {
			title: "title",
			media: "mainImage",
		},
		prepare(selection) {
			return Object.assign({}, selection, {
				subtitle: `by Abdelrahman`,
			});
		},
	},
};
