<script>
    import CallToAction from '$lib/assets/components/action/CallToAction.svelte';
    import Sidebar from '$lib/assets/components/action/Sidebar.svelte';
    import items from '$lib/data.json';
    import {
        each
    } from 'svelte/internal';

    export let data;
</script>

<main>
    {#each items as item}
		{#if item.id == data.id}
            <header class="relative">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="w-full object-cover h-[520px]" src={item.details_bg_image} alt="Image by macrovector on Freepik">
                <div class="absolute flex items-center justify-center h-full w-full top-0 left-0 right-0">
                    <h1 class="p-3 px-5 bg-base-black/80 text-white h1-elem">{item.title}</h1>
                </div>
            </header>
            <section class="bg-white py-10 md:py-20">
                <div class="container mx-auto md:flex justify-between items-start w-full">
                   <Sidebar title={"Articles"} items={items} dataID={data.id} />
                   <div class="w-full">
                        <img class="rounded-3xl max-w-[400px] max-h-[160px] w-full object-cover mb-3 shadow-lg drop-shadow-lg" src={item.imageUrl} alt={item.title}>
                        <div class="bg-base-purple text-white py-2 px-4 my-3 flex uppercase font-title w-max">{item.tags}</div>
                        {#if item.body2}
                        <p class="py-2 font-secondary-title h6-elem">{item.lead2}</p>
                        {/if}
                        <p class="py-2">{item.body1}</p>
                        {#if item.body2}
                        <p class="py-2">{item.body2}</p>
                        {/if}
                        {#if item.subtitle}
                        <p class="py-4 font-secondary-title">{item.subtitle}</p>
                        {/if}
                        {#if item.body3}
                        <p class="py-2">{item.body3}</p>
                        {/if}
                        {#if item.endBody}
                        <p class="py-2">{item.endBody}</p>
                        {/if}
                   </div>
                </div>
            </section>
		{/if}
	{/each}
    <CallToAction />

</main>