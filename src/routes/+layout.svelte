<script>
	import './styles.css';
	import MobileNavButton from '../feaures/navbar/mobile-nav-button.svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { navigating } from '$app/stores';
	import NavbarLink from '../feaures/navbar/navbar-link.svelte';
	import Navbar from '../feaures/navbar/navbar.svelte';

	let showSidebar = false;
</script>

<Navbar />

<main class="container lg:max-w-4xl mx-auto px-4">
	<slot />
</main>
