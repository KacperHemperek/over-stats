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
		const playerTitle = $('.Profile-player--title').text();
		const playerName = $('.Profile-player--name').text();
		/**
		 * @type {Array<{ rankIconSrc: string | undefined; roleIconSrc: string|undefined }>}
		 */
		const ranks = [];

		const roleWrappers = $('.Profile-playerSummary--roleWrapper');
		roleWrappers.each((i, el) => {
			const rankIconSrc = $(el).find('.Profile-playerSummary--rank').attr('src');
			const roleIconSrc = $(el).find('.Profile-playerSummary--role > img').attr('src');

			ranks.push({
				rankIconSrc,
				roleIconSrc
			});
		});

		return json({
			image,
			playerTitle,
			ranks: ranks.filter((rank) => !!rank.rankIconSrc && !!rank.roleIconSrc),
			username: playerName
		});
	} catch (err) {
		console.error(err);
		throw error(500, 'Internal server error');
	}
}
