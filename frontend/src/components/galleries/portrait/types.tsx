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
		alt: string | null;
	};
	excerpt: Excerpt[];
}
