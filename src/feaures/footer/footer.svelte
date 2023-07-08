<script>
	import { links } from '$lib/utils/nav-links';
	import GithubIcon from '../common/github-icon.svelte';
</script>

<footer class="bg-zinc-950 text-zinc-300 p-4 text-sm text-center py-14">
	<div class="container lg:max-w-4xl mx-auto px-4">
		<div class="grid gap-6 md:grid-cols-2">
			<div class="flex flex-col gap-1">
				<h5 class="mb-1">Links</h5>
				{#each links as link}
					<a href={link.href} class="underline">
						{link.name}
					</a>
				{/each}
			</div>
			<div class="flex flex-col gap-1">
				<h5 class="">Authors</h5>
				<a
					target="_blank"
					href="https://github.com/KacperHemperek"
					class="flex items-center justify-center underline"
				>
					<span class="flex w-4 h-4 mr-1">
						<GithubIcon />
					</span>
					Kacper Hemperek
				</a>
				<a
					target="_blank"
					href="https://github.com/czitermaster"
					class="flex items-center justify-center underline"
				>
					<span class="flex w-4 h-4 mr-1">
						<GithubIcon />
					</span>
					Kajetan Kacprzyk
				</a>
			</div>
			<p class="text-center text-xs col-span-2">
				OverStats is an amateur project not affiliated with Blizzard Entertainment.
			</p>
		</div>
	</div>
</footer>
