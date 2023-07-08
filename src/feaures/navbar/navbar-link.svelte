<script>
	import { page } from '$app/stores';
	/**
	 * @type {String}
	 */
	export let href;
	/**
	 * @type {string}
	 */
	export let name;

	$: active = $page.url.pathname === href;
</script>

<a
	{href}
	class="{active
		? 'text-orange-500'
		: 'text-zinc-50'} text-2xl py-2 text-center font-semibold uppercase hover:text-orange-500 transition duration-200 lg:text-base lg:py-0"
	>{name}</a
>
