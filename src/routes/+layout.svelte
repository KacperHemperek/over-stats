<script>
	import './styles.css';
	import Navbar from '../feaures/navbar/navbar.svelte';
	import Footer from '../feaures/footer/footer.svelte';

	let showSidebar = false;
</script>

<div class="min-h-screen flex flex-col">
	<Navbar />

	<main class="container lg:max-w-4xl mx-auto px-4 flex-grow mb-12">
		<slot />
	</main>

	<Footer />
</div>
