import S from "@sanity/desk-tool/structure-builder";

const ExhibitionPost = S.listItem()
	.title("Exhibitons")
	.child(
		S.list()
			.title("Exhibitions Section")
			.items([S.documentTypeListItem("exhibitions").title("All posts")])
	);

export default ExhibitionPost;
