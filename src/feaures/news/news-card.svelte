<script>
	/** @type {string} -- title to display in card header */
	export let title;
	/** @type {string | undefined} -- link to header image of card */
	export let src;
	/** @type {string | undefined} -- href to a page to redirect to  */
	export let href;
</script>

<a
	{href}
	class="flex flex-col group border-2 border-zinc-600 hover:border-zinc-400 transition-colors duration-1000"
	target="_blank"
>
	<div class="relative overflow-hidden">
		<img
			{src}
			alt="{title} header photo"
			class="w-full aspect-video object-cover group-hover:scale-105 transition-all duration-1000 hover:brightness-125"
		/>
	</div>
	<div
		class="flex flex-col p-6 flex-grow border-t-2 border-zinc-600 group-hover:border-zinc-400 transition-colors duration-1000"
	>
		<h3 class="uppercase">{title}</h3>
	</div>
</a>
