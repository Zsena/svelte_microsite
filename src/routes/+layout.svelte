<script>
	import '../app.css';
	import Header from '../lib/assets/components/layout/Header.svelte';
	import Footer from '../lib/assets/components/layout/Footer.svelte';
	export const ssr = false;
</script>

<Header />

<main class="pt-[87px] bg-white">
	<slot />
</main>

<Footer />