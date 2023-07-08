<script>
	import { createEventDispatcher } from 'svelte';

	export let value = '';

	const dispatch = createEventDispatcher();

	// @ts-ignore -- keydown event
	const handleKeydown = (event) => {
		if (event.key === 'Enter') {
			dispatch('search');
		}
	};
</script>

<label
	class="flex gap-2 p-3 items-center border-2 text-zinc-600 border-zinc-600 focus-within:border-orange-500 transition-all cursor-text"
>
	<span class="w-5 h-5">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-search"
			><circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	</span>

	<input
		type="text"
		name="search"
		bind:value
		class="bg-zinc-900 outline-none flex-grow text-zinc-50 placeholder:text-zinc-600"
		placeholder="Search for an account"
		on:keydown={handleKeydown}
	/>
</label>
