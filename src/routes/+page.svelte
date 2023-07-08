<script>
	import InfoCard from '../feaures/homepage/info-card.svelte';
	import SectionHeader from '../feaures/common/section-header.svelte';

	const homepageCards = [
		{
			title: 'Search',
			description:
				'Find specific players and and check out their stats, champions they play and more',
			icon: `<svg
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
          </svg>`
		},
		{
			title: 'Track',
			description: 'Track your stats and see how you are doing in ranked and unranked matches',
			icon: `
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
		  fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-bar-chart-4"
    >
      <path d="M3 3v18h18" />
      <path d="M13 17V9" />
      <path d="M18 17V5" />
      <path d="M8 17v-3" />
    </svg>`
		},
		{
			title: "What's New",
			description:
				'Stay up-to-date with the latest features, updates, and exciting additions to Overwatch 2.',
			icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`
		}
	];
</script>

<svelte:head>
	<title>Over Stats</title>
	<meta
		name="description"
		content="Over Stats - get stats for your account in ranked and unranked matches"
	/>
</svelte:head>
<SectionHeader>
	<span slot="title">OVER <span class="text-orange-500">STATS</span></span>
	<span slot="description"
		>Find your account, track your <span class="text-orange-500">stats</span> and keep up with your games</span
	>
</SectionHeader>

<article>
	<h1 class="text-2xl font-bold text-center uppercase mb-8">Features</h1>
	<div class="grid mb-6 gap-6 md:grid-cols-3">
		{#each homepageCards as card}
			<InfoCard title={card.title} description={card.description}>
				{@html card.icon}
			</InfoCard>
		{/each}
	</div>
</article>
