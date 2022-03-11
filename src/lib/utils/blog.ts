import fm from 'front-matter';

export const getPost = async (content: string) => {
	const tc = await fm(content);
	// @ts-ignore
	const { title, date, description } = tc.attributes;
	return {
		title,
		date,
		description,
		excerpt: description.replace(/^(.{100}[^\s]*).*/, '$1')
	};
};
