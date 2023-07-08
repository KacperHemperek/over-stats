<script>
	import { goto } from '$app/navigation';
	import Searchbar from '../../feaures/common/searchbar.svelte';
	import SectionHeader from '../../feaures/common/section-header.svelte';
	import Tooltip from '../../feaures/common/tooltip.svelte';

	let searchQuery = '';
	let timeout = null;
	let showTooltip = false;

	const handleSearch = (event) => {
		if (event.detail.isValid) {
			goto(`/account/${event.detail.username}-${event.detail.tag}`);
		} else {
			showTooltip = true;
			if (timeout) {
				console.log('clearing timeout');
				clearTimeout(timeout);
			}
			timeout = setTimeout(() => {
				console.log('hidint tooltip');
				showTooltip = false;
			}, 2000);
		}
	};
</script>

<SectionHeader>
	<span slot="title">Search</span>
	<span slot="description">
		Find specific <span class="text-orange-500">players</span> and and check out their
		<span class="text-orange-500">stats</span>, champions they play and more, add players to your
		<span class="text-orange-500">favorites</span> to track their progress
	</span>
</SectionHeader>

<Searchbar bind:value={searchQuery} on:search={handleSearch} />

{#if showTooltip}
	<Tooltip
		message="Your username is invalid, keep in mind you have to pass username like so: username#1234"
		title="Search error"
	/>
{/if}
