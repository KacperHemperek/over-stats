<script>
	import SectionHeader from '../../feaures/common/section-header.svelte';
	import NewsCard from '../../feaures/news/news-card.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SectionHeader>
	<span slot="title">NEWS</span>
	<span slot="description"
		>Latest news from <span class="text-orange-500">overwatch</span>, new maps, skins, battle pass
		and more</span
	>
</SectionHeader>
<section class="grid gap-6 md:grid-cols-2">
	{#each data.cards as card}
		<NewsCard title={card.title} src={card.imgSrc} href={card.link} />
	{/each}
</section>
