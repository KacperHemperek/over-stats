import { getCheerioHtml } from '$lib/utils/getCheerioHtml';
import { error, json } from '@sveltejs/kit';

/** @type {import('../$types').RequestHandler} */
export async function GET() {
	try {
		const $ = await getCheerioHtml(
			'https://overwatch.blizzard.com/en-us/career/czitermaster-2477/'
		);

		const name = $('.Profile-player--name').text();

		return json({ name });
	} catch (err) {
		throw error(500, 'Internal server error');
	}
}
