export interface ParamType {
	slug: string;
}
export interface Body {
	children: Body[];
	style: string;
	_key: string;
	_type: string;
}
export interface Gallery {
	images: [] | [];
}
export interface Project {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	mainImage: {
		asset: {
			url: string;
		};
		alt: string | "No Caption";
	};
	body: Body[];
	gallery: Gallery;
	publishedAt: string;
	categories: [];
}
export interface Image {
	asset: {
		_ref: string;
		_type: string;
	};
	_key: string;
	_type: string;
	columnStart: number;
	columnEnd: number;
	rowStart: number;
	rowEnd: number;
	alt: string | "No Caption";
}
export interface OtherPosts {
	_id: string;

	slug: {
		current: string;
	};
	mainImage: {
		asset: {
			url: string;
		};
		alt: string | "No Caption";
	};
}
