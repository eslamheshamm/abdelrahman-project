import S from "@sanity/desk-tool/structure-builder";

const projectPost = S.listItem()
	.title("Projects")
	.child(
		S.list()
			.title("Projects Section")
			.items([
				S.documentTypeListItem("post").title("All posts"),
				S.documentTypeListItem("category").title("Categories"),
			])
	);

export default projectPost;
