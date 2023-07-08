export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch('/api/news');

	const data = await res.json();

	/**
	 * @type {{ title: string; imgSrc: string | undefined; link: string | undefined; }[]}
	 */
	const cards = data.cardData;
	return { cards };
}
