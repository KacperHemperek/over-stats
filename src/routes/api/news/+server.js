import { getCheerioHtml } from '$lib/utils/getCheerioHtml';
import { error, json } from '@sveltejs/kit';

/** @type {import('../$types').RequestHandler} */
export async function GET() {
	try {
		const $ = await getCheerioHtml('https://overwatch.blizzard.com/en-us/news/');

		const cards = $('blz-card');

		/**
		 * @type {{ title: string; imgSrc: string | undefined; link: string | undefined; }[]}
		 */
		const cardData = [];

		cards.each((idx, el) => {
			const title = $(el).find('h4').text();
			const imgSrc = $(el).find('blz-image').attr('src');
			const link = $(el).attr('href');

			cardData.push({ title, imgSrc, link });
		});

		return json({ cardData });
	} catch (err) {
		console.error(err);
		throw error(500, 'Internal server error');
	}
}
