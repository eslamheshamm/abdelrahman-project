import S from "@sanity/desk-tool/structure-builder";
import projectPost from "./src/structure/project-post";
import ExhibitionPost from "./src/structure/exhibition-post";
import Galleries from "./src/structure/galleries";
const hiddenDocTypes = (listItem) =>
	![
		"post",
		"category",
		"portrait",
		"documentary",
		"cinematography",
		"street",
		"commercial-shots",
		"exhibitions",
	].includes(listItem.getId());

export default () =>
	S.list()
		.title("Base")
		.items([
			// S.listItem()
			// 	.title("Blog")
			// 	.child(S.document().schemaType("post").documentId("post")),
			projectPost,
			ExhibitionPost,
			Galleries,
			// S.documentListItem()
			// 	.schemaType("portrait")
			// 	.title("portrait")
			// 	.child(
			// 		S.editor()
			// 			.id("portrait")
			// 			.schemaType("portrait")
			// 			.documentId("portrait")
			// 	),

			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);
