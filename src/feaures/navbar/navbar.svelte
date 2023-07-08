<script>
	import { fly } from 'svelte/transition';
	import MobileNavButton from './mobile-nav-button.svelte';
	import { cubicOut } from 'svelte/easing';
	import { navigating } from '$app/stores';
	import NavbarLink from './navbar-link.svelte';
	import { links } from '$lib/utils/nav-links';
	import PageLoader from './page-loader.svelte';

	let showSidebar = false;

	$: if ($navigating) {
		showSidebar = false;
	}
</script>

<nav class="sticky top-0 left-0 bg-zinc-900 z-40 shadow-md">
	<div
		class=" text-zinc-50 flex justify-between items-center mx-auto p-4 lg:max-w-4xl container relative"
	>
		<a href="/" class="text-xl font-bold uppercase">
			Over <span class="text-orange-500">Stats</span>
		</a>
		<MobileNavButton on:click={() => (showSidebar = true)}>
			<svg
				slot="icon"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-menu"
				><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line
					x1="4"
					x2="20"
					y1="18"
					y2="18"
				/></svg
			>
		</MobileNavButton>
		{#if showSidebar}
			<div
				class="w-screen h-[100dvh] bg-zinc-900 lg:hidden fixed top-0 left-0"
				in:fly={{ duration: 400, x: '100%', opacity: 1, easing: cubicOut }}
				out:fly={{ duration: 400, x: '100%', opacity: 1, easing: cubicOut }}
			>
				<div class="p-4 flex justify-end items-center container lg:max-w-4xl mx-auto">
					<MobileNavButton on:click={() => (showSidebar = false)}>
						<svg
							slot="icon"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
						>
					</MobileNavButton>
				</div>
				<div class="grid p-4 gap-4">
					{#each links as link}
						<NavbarLink href={link.href} name={link.name} />
					{/each}
				</div>
			</div>
		{/if}

		<div class="space-x-12 hidden lg:block">
			{#each links as link}
				<NavbarLink href={link.href} name={link.name} />
			{/each}
		</div>
	</div>
</nav>

{#if $navigating}
	<PageLoader />
{/if}
