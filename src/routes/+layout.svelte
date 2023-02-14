<script>
	import '../app.css';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
	export const ssr = false;
</script>

<Header />

<main class="h-screen pt-[87px] bg-white">
	<slot />
</main>

<Footer />