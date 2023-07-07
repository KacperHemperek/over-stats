import { error, json } from '@sveltejs/kit';
import * as cheerio from 'cheerio';
import { chromium } from 'playwright';

/** @type {import('../$types').RequestHandler} */
export async function GET() {
	try {
		const browser = await chromium.launch({
			headless: false,
			args: ['--headless=new']
		});

		const context = await browser.newContext();
		const page = await context.newPage();
		await page.goto('https://overwatch.blizzard.com/en-us/career/czitermaster-2477/');

		const name = await page.$eval('.Profile-player--name', (el) => el.textContent);
		// const res = await fetch('https://overwatch.blizzard.com/en-us/career/czitermaster-2477/');

		// const html = await res.text();

		// const $ = cheerio.load(html);

		// const name = $('.Profile-player--name').text();
		browser.close();

		return json({ name });
	} catch (err) {
		throw error(500, 'Internal server error');
	}
}
