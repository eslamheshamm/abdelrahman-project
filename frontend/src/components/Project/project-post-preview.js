import React from "react";
import Link from "react-router-dom";
import { buildImageObj, cn } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";

import styles from "./project-post-preview.module.css";

function PressPostPreview(props) {
	return (
		<section className="flex flex-col">
			<div>
				{props.mainImage && props.mainImage.asset && (
					<img
						src={imageUrlFor(buildImageObj(props.mainImage))
							.width(600)
							.height(Math.floor((9 / 16) * 600))
							.auto("format")
							.url()}
						alt={props.mainImage.alt}
					/>
				)}
			</div>
			<div>
				<h3>{props.title}</h3>
				{props._rawExcerpt && (
					<div className={styles.excerpt}>
						<PortableText blocks={props._rawExcerpt} />
					</div>
				)}
			</div>
		</section>
	);
}

export default PressPostPreview;
