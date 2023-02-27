<script>
    import items from '$lib/pest_types.json';
    import Leaf from '$lib/assets/svg/leaf.svg';
</script>
<section class="bg-light-purple/40 pt-10 md:pt-20">
    <div class="container mx-auto w-full">
        <h1 class="h2-elem mb-8 flex items-center"><span>Pest Types</span>
            <Leaf class="ml-3" />
        </h1>
    </div>
</section>
<section class="bg-light-purple/40 pb-10 md:pb-20">
    <div class="container mx-auto md:flex justify-center lg:justify-between items-start flex-wrap w-full">
        {#each items as item}
			<div
				class="bg-white border-f2-white/50 outline-f2-white/50 w-full md:max-w-[270px] rounded-[13.16px] m-3 p-4 shadow-sm">
				<a href={`/pest-types/${item.id}`}>
					<img class="rounded-[13.16px] md:max-w-[250px] max-h-[220px] w-full object-cover mb-3"
						src={item.imageUrl}
						alt={item.imageAlt}
					/>
				</a>
				{#if item.title}
					<p class="my-3 h6-elem">{item.title}</p>
				{/if}
				<div class="text-11 text-green">
					{item.tags}
				</div>
				<hr class="border-base-purple my-3" />
				<div class="flex justify-between items-center">
					<div class="text-11 text-orange bg-dirty-white rounded-full py-1 px-3">
						{item.hoursWithWork}
					</div>
					<a class="dm-sans-16 text-base-purple" href={`/pest-types/${item.id}`}>Read more</a>
				</div>
			</div>
		{/each}
	</div>
</section>