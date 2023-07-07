import { error, json } from '@sveltejs/kit';
import puppeteer from 'puppeteer';

/** @type {import('../$types').RequestHandler} */
export async function GET() {
	try {
		const browser = await puppeteer.launch({ headless: false, defaultViewport: null });

		const page = await browser.newPage();

		await page.goto('https://overwatch.blizzard.com/en-us/career/czitermaster-2477/', {
			waitUntil: 'domcontentloaded'
		});

		const displayName = await page.evaluate(() => {
			const name = document.querySelector('.Profile-player--name')?.innerHTML;

			return name;
		});

		browser.close();
		return json({ displayName });
	} catch (err) {
		throw error(500, 'Internal server error');
	}
}
