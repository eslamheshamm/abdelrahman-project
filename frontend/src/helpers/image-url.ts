import sanityClient from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function imageUrlFor(source: string) {
	return builder.image(source);
}
