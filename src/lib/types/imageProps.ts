declare type ImageSource = {
	src: string;
	format: string;
};

export type ImageProps = {
	slug: string;
	sources: ImageSource[];
	alt?: string;
	width?: number;
	height?: number;
	placeholder: string;
};
