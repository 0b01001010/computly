declare type ImageSource = {
	srcset: string;
	type: string;
};

export type ImageProps = {
	sources: ImageSource[];
	alt?: string;
	width: number;
	height: number;
	placeholder: string;
	name: string;
};
