<script>
	import CallToAction from '$lib/assets/components/action/CallToAction.svelte';
	import Testimonials from '$lib/assets/components/action/Testimonials.svelte';
</script>
<header class="relative">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img class="w-full object-cover max-h-[400px]" src="../images/pest_bg.jpg" alt="Image by aleksandarlittlewolf on Freepik">
	<div class="absolute flex items-center justify-center h-full w-full top-0 left-0 right-0">
		<h1 class="p-3 px-5 bg-base-black/80 text-white h1-elem">About us</h1>
	</div>
</header>
<Testimonials />
<CallToAction />

