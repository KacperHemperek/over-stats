/** @type {import('../$types').PageLoad} */
export async function load({ params, fetch }) {
	console.log(params);

	const [username, tag] = params.userInfo.split('-');

	const res = await fetch(`/api/accounts/${username}/${tag}/`);

	if (res.ok) {
		const data = await res.json();
		return {
			...data
		};
	}

	return {};
}
