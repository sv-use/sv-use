import { convertMarkdownFileToHTML } from '$lib/utils/markdown.server.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ params }) => {
	const data = await convertMarkdownFileToHTML<{ title: string; description: string }>(
		`./src/lib/docs/getting-started/${params.slug}.md`
	);

	return {
		...data
	};
};