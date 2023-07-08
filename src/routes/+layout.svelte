<script>
	import './styles.css';
	import Navbar from '../feaures/navbar/navbar.svelte';

	let showSidebar = false;
</script>

<Navbar />

<main class="container lg:max-w-4xl mx-auto px-4">
	<slot />
</main>
