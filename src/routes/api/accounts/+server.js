import { getCheerioHtml } from '$lib/utils/getCheerioHtml';
import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	try {
		const query = url.searchParams.get('q');

		if (!query) {
			throw error(400, 'Query parametr "q" is required');
		}

		const $ = await getCheerioHtml(`https://overwatch.blizzard.com/en-us/search/?q=${query}`);

		const test = $('.results-container').html();

		console.log({ test });

		return json({ test });
	} catch (err) {
		throw error(500, 'Internal server error');
	}
}
