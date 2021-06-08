import S from "@sanity/desk-tool/structure-builder";

const Galleries = S.listItem()
	.title("Galleries")
	.child(
		S.list()
			.title("Galleries")
			.items([
				S.documentListItem()
					.schemaType("portrait")
					.title("Portrait")
					.child(
						S.editor()
							.id("portrait")
							.schemaType("portrait")
							.documentId("portrait")
					),
				S.documentListItem()
					.schemaType("documentary")
					.title("Documentary")
					.child(
						S.editor()
							.id("documentary")
							.schemaType("documentary")
							.documentId("documentary")
					),
				S.documentListItem()
					.schemaType("cinematography")
					.title("Cinematography")
					.child(
						S.editor()
							.id("cinematography")
							.schemaType("cinematography")
							.documentId("cinematography")
					),
				S.documentListItem()
					.schemaType("street")
					.title("Street")
					.child(
						S.editor().id("street").schemaType("street").documentId("street")
					),
				S.documentListItem()
					.schemaType("commercial-shots")
					.title("Commercial Shots")
					.child(
						S.editor()
							.id("commercial-shots")
							.schemaType("commercial-shots")
							.documentId("commercial-shots")
					),
			])
	);

export default Galleries;
