<script>
	import { goto } from '$app/navigation';
	import Searchbar from '../../feaures/common/searchbar.svelte';
	import SectionHeader from '../../feaures/common/section-header.svelte';

	let searchQuery = '';

	const handleSearch = (event) => {
		if (event.detail.isValid) {
			goto(`/account/${event.detail.username}-${event.detail.tag}`);
		} else {
			console.log('invalid search');
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
