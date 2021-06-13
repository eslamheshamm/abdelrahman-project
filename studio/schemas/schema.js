// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./objects/blockContent";
import category from "./documents/category";
import post from "./documents/post";
import portrait from "./documents/galleries/portrait";
import documentary from "./documents/galleries/documentary";
import cinematography from "./documents/galleries/cinematography";
import street from "./documents/galleries/street";
import commercialShots from "./documents/galleries/commercial-shots";
import exhibitions from "./documents/exhibitions";
// objects
import gallery from "./objects/gallery";
import mainImage from "./objects/mainImage";
import excerptPortableText from "./objects/excerptPortableText";
import galleryImage from "./objects/galleryImage";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// The following are document types which will appear
		// in the studio.
		post,
		portrait,
		documentary,
		cinematography,
		street,
		commercialShots,
		category,
		gallery,
		exhibitions,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
		blockContent,
		excerptPortableText,
		mainImage,
		galleryImage,
	]),
});
