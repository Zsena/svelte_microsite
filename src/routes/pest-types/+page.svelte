<script>
    import CallToAction from '$lib/assets/components/action/CallToAction.svelte';
	import Testimonials from '$lib/assets/components/action/Testimonials.svelte';
	import PestType from '$lib/assets/components/PestType.svelte';
    export let data;
    console.log(data);
</script>

<header class="relative">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="w-full object-cover h-full" src="../images/pest_types/hero.svg" alt="Pest type" />
</header>
<CallToAction />
<PestType />
<Testimonials />