<script>
	import SectionHeader from '../../feaures/common/section-header.svelte';
</script>

<SectionHeader>
	<span slot="title">Search</span>
	<span slot="description">
		Find specific <span class="text-orange-500">players</span> and and check out their
		<span class="text-orange-500">stats</span>, champions they play and more, add players to your
		<span class="text-orange-500">favorites</span> to track their progress
	</span>
</SectionHeader>

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
		class="bg-zinc-900 outline-none flex-grow text-zinc-50 placeholder:text-zinc-600"
		placeholder="Search for an account"
	/>
</label>
