<script>
	/** @type {string} -- title to display in card header */
	export let title;
	/** @type {string} -- description to display in card body */
	export let description;
	/** @type {string} -- link for page to redirect in click */
	export let href;
</script>

<a {href} class="flex justify-cente border-2 border-zinc-600 p-4 flex-col">
	<div class=" flex items-center gap-1 mb-2">
		<h2 class="text-lg font-bold text-orange-500">{title}</h2>
		<div class="w-4 h-4 flex text-zinc-500">
			<slot />
		</div>
	</div>
	<p class="text-zinc-500">
		{description}
	</p>
</a>
