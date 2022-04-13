declare type ImageSource = {
	src: string;
	format: string;
};

export type ImageProps = {
	sources: ImageSource[];
	alt?: string;
	width?: number;
	height?: number;
	placeholder: string;
	slug?: string;
};
