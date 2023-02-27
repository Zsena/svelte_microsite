<script>
	import CallToAction from '$lib/assets/components/action/CallToAction.svelte';
	import Sidebar from '$lib/assets/components/action/Sidebar.svelte';
	import items from '$lib/pest_types.json';
	import { each } from 'svelte/internal';
	export let data;
</script>

<main>
	{#each items as item}
		{#if item.id == data.id}
			<header class="bg-white py-10 md:py-20">
				<div class="container mx-auto md:flex items-center justify-between">
					<div class="md:w-1/2">
						<h1 class="h1-elem mb-10 md:mb-0">{item.title}</h1>
                        <p class="my-4 md:mt-8 md:mb-0">{item.lead}</p>
					</div>
					<div class="md:w-1/2">
						<img class="w-full object-cover lg:h-[300px] mr-auto ml-auto md:mr-0 max-w-[300px] rounded-[13.16px]" src={item.imageUrl} alt={item.imageAlt} />
					</div>
				</div>
			</header>
			<CallToAction />
			<section class="bg-white py-10 md:py-20">
				<div class="container mx-auto md:flex justify-between items-start w-full">
					<Sidebar title={'Pest Types'} {items} dataID={data.id} />
					<div class="w-full">
						<div class="bg-base-purple text-white py-2 px-4 my-3 flex uppercase font-title w-max">
							{item.tags}
						</div>
						{#if item.lead}
							<p class="py-2 font-secondary-title h6-elem">{item.lead}</p>
						{/if}
						{#if item.body1}
							<p class="py-2">{item.body1}</p>
						{/if}
						{#if item.body2}
							<p class="py-2">{item.body2}</p>
						{/if}
						{#if item.body3}
							<p class="py-2">{item.body3}</p>
						{/if}
						{#if item.subtitle}
							<p class="py-4 font-secondary-title">{item.subtitle}</p>
						{/if}
						{#if item.body4}
							<p class="py-2">{item.body4}</p>
						{/if}
						{#if item.body5}
							<p class="py-2">{item.body5}</p>
						{/if}
						{#if item.body6}
							<p class="py-2">{item.body6}</p>
						{/if}
						{#if item.body7}
							<p class="py-2">{item.body7}</p>
						{/if}
						{#if item.body8}
							<p class="py-2">{item.body8}</p>
						{/if}
					</div>
				</div>
			</section>
		{/if}
	{/each}
	<CallToAction />
</main>
