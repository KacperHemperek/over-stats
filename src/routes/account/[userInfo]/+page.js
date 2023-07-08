/** @type {import('../$types').PageLoad} */
export async function load({ params, fetch }) {
	// @ts-expect-error -- params is not typed
	const [username, tag] = params.userInfo.split('-');
	console.log({ username, tag });

	const res = await fetch(`/api/accounts/${username}/${tag}`);

	if (res.ok) {
		/**
		 * @type {{
		 *  playerTitle: string;
		 *  image: string;
		 *  ranks: Array<{ rankIconSrc: string; roleIconSrc: string; }>;
		 * }}
		 */
		const data = await res.json();

		return data;
	}

	throw new Error('Failed to fetch user information', { cause: res.statusText });
}
