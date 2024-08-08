import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import Feature from '../../components/Feature.svelte';
import Grid from '../../components/Grid.svelte';
import Page from '../../components/Page.svelte';
import Teaser from '../../components/Teaser.svelte';
import Hero from '../../components/Hero.svelte';
import { STORYBLOK_ACCESS_TOKEN } from '$env/static/private';

export function initializeStoryblok() {
	storyblokInit({
		accessToken: STORYBLOK_ACCESS_TOKEN,
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser,
			hero: Hero
		}
	});

	return useStoryblokApi();
}

export async function fetchStory(slug) {
	try {
		const storyblokApi = initializeStoryblok();
		const response = await storyblokApi.get(`cdn/stories/${slug}`, {
			version: 'draft' // or 'published'
		});

		if (!response.data || !response.data.story) {
			throw new Error('Invalid Storyblok response structure');
		}

		return response.data.story;
	} catch (error) {
		console.error('Error fetching story from Storyblok:', error);
		throw error;
	}
}

export async function fetchConfig() {
	try {
		const storyblokApi = initializeStoryblok();
		const dataConfig = await storyblokApi.get('cdn/stories/navbar/', {
			version: 'draft',
			resolve_links: 'url'
		});
		return { header: dataConfig.data.story.content.header_menu };
	} catch (error) {
		console.error('Error fetching stories from Storyblok:', error);
		throw error;
	}
}
