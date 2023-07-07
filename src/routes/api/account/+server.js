import { error, json } from '@sveltejs/kit';
import * as cheerio from 'cheerio';

/** @type {import('../$types').RequestHandler} */
export async function GET() {
	try {
		const res = await fetch('https://overwatch.blizzard.com/en-us/career/czitermaster-2477/');

		const html = await res.text();

		const $ = cheerio.load(html);

		const name = $('.Profile-player--name').text();

		return json({ name });
	} catch (err) {
		throw error(500, 'Internal server error');
	}
}
