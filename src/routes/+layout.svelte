<script>
	export const prerender = true;
	import '../app.css';
	import Header from './components/layout/Header.svelte'
	import Footer from './components/layout/Footer.svelte'
</script>

<Header />

<main class="h-screen pt-[87px] bg-white">
	<slot />
</main>

<Footer />