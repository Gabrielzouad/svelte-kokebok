import { fetchStory } from '$lib/server/storyblok';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const story = await fetchStory('home');

		return {
			story
		};
	} catch (error) {
		console.error('Failed to fetch story:', error);
		return {
			status: 500,
			error: new Error('Failed to load story')
		};
	}
}
