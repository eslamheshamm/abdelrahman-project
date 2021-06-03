export default {
	name: "cinematography",
	title: "Cinematography",
	type: "document",
	// __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
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
			return Object.assign({}, selection, {});
		},
	},
};
