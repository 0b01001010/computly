import type { ImageProps } from './imageProps';

export declare type Post = {
	slug: string;
	title?: string;
	date?: string;
	description?: string;
	excerpt?: string;
	mainImage?: ImageProps;
};
