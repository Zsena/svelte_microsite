<script>
	import '../app.css';
	import '../theme.css';
	import Header from './components/layout/Header.svelte'
	import Footer from './components/layout/Footer.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<Footer />