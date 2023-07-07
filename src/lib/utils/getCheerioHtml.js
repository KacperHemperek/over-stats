import * as cheerio from 'cheerio';

/**
 * Get parsed html from any website using cheerio
 * @param {string} url - url to get html from
 */
export async function getCheerioHtml(url) {
	const res = await fetch(url);

	const html = await res.text();

	return cheerio.load(html);
}
