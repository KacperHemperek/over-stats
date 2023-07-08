//overwatch.blizzard.com/en-us/career/czitermaster-2477/

import { getCheerioHtml } from '$lib/utils/getCheerioHtml';
import { error, json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const { username, tag } = params;

	try {
		const $ = await getCheerioHtml(
			`https://overwatch.blizzard.com/en-us/career/${username}-${tag}/`
		);

		const image = $('.Profile-player--portrait').attr('src');
		return json({
			image
		});
	} catch (err) {
		throw error(500, 'Internal server error');
	}
}
