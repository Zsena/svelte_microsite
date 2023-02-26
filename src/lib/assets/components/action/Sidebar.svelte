<script>
	export let items;
    export let title;
    export let dataID;
</script>

<aside class="bg-light-purple/70 md:min-w-[14rem] lg:min-w-[18rem] md:mr-5">
	<nav class="p-8">
		<ul>
			<li class="h5-elem font-title mb-5">{title}</li>
			{#each items as item}
				<li><a class="sidebar-link { item.id == dataID ? 'active' : ''}" href={item.id}>{item.title}</a></li>
			{/each}
		</ul>
	</nav>
</aside>
