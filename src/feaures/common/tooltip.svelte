<script>
	import { fly } from 'svelte/transition';

	/** @type{string} */
	export let title;

	/** @type{string} */
	export let message;
</script>

<div
	class="p-4 max-w-xs fixed bottom-8 right-1/2 translate-x-1/2 bg-red-500"
	in:fly={{ y: 200, duration: 200, opacity: 1 }}
	out:fly={{ y: 200, duration: 200, opacity: 1 }}
>
	<h4>{title}</h4>
	<p>{message}</p>
</div>
