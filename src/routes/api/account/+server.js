import { error, json } from '@sveltejs/kit';
// import * as cheerio from 'cheerio';
import chromium from 'chrome-aws-lambda';
import playwright from 'playwright-core';

/** @type {import('../$types').RequestHandler} */
export async function GET() {
	let browser;
	try {
		browser = await playwright.chromium.launch({
			args: chromium.args,
			executablePath:
				process.env.NODE_ENV !== 'development'
					? await chromium.executablePath
					: '/usr/bin/chromium',
			headless: process.env.NODE_ENV !== 'development' ? chromium.headless : true
		});

		// const res = await fetch('https://overwatch.blizzard.com/en-us/career/czitermaster-2477/');

		// const html = await res.text();

		// const $ = cheerio.load(html);

		// const name = $('.Profile-player--name').text();
		browser.close();

		return json({ hello: 'world' });
	} catch (err) {
		throw error(500, 'Internal server error');
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}
