<script>
	import { navigating } from '$app/stores';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	$: console.log($navigating);

	$: if ($navigating) {
		progress.set(0.75);
	} else {
		progress.set(1);
	}
</script>

<div
	class="fixed top-0 h-1 bg-orange-500 z-50"
	style="width: {$progress * 100}%;"
	out:fade={{ delay: 1000 }}
/>
