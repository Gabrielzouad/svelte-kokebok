import { fetchConfig } from '$lib/server/storyblok';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const header = await fetchConfig();

		return {
			header
		};
	} catch (error) {
		console.error('Failed to fetch story:', error);
		return {
			status: 500,
			error: new Error('Failed to load story')
		};
	}
}
