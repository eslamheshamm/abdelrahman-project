export interface Gallery {
	images: [];
}
export interface Excerpt {
	children: Excerpt[];
	style: string;
	_key: string;
	_type: string;
}

export interface PortraitProps {
	title: string;
	_id: string;
	gallery: Gallery;
	mainImage: {
		asset: {
			url: string;
		};
		alt: string | "No Caption";
	};
	excerpt: Excerpt[];
}
export interface ParamType {
	id: string;
}

export interface Image {
	asset: {
		_ref: string;
		_type: string;
		url: string;
	};
	_key: string;
	_type: string;
	columnStart: number;
	columnEnd: number;
	rowStart: number;
	rowEnd: number;
	alt: string | "No Caption";
}
