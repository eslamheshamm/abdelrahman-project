import React from "react";
import BlockContent from "@sanity/block-content-to-react";
type PortableTextProps = {
	blocks: any[];
};

const serializers = {
	types: {},
};
const PortableText: React.FC<PortableTextProps> = (props) => {
	return BlockContent({
		blocks: props.blocks,
		projectId: "nvgzml10",
		dataset: "production",
		serializers: serializers,
	});
};

export default PortableText;
