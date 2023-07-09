<script>
	import RankCard from '../../../feaures/account/rank-card.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	console.log({ data });
</script>

<header class="pt-12">
	<div class="flex gap-6 flex-col items-center">
		<img class="w-24 h-24" src={data.image} alt="user profile" />
		<div class="text-center">
			<h1 class="text-2xl font-bold uppercase mb-1 md:mb-2">{data.username}</h1>
			<h1 class="text-lg font-semibold capitalize text-orange-500">{data.playerTitle}</h1>
		</div>
		<div class="flex flex-wrap gap-6 justify-center">
			{#each data.ranks as rank}
				<RankCard rankSrc={rank.rankIconSrc} roleSrc={rank.roleIconSrc} />
			{/each}
		</div>
	</div>
</header>
