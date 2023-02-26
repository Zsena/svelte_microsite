<script>
    import items from '$lib/data.json';

	const slugs = [
		items[0].id,
		items[1].id,
		items[2].id,
		items[3].id
	]

	const titles = [
		items[0].title,
		items[1].title,
		items[2].title,
		items[3].title
	];

	const leads = [
		items[0].lead,
		items[1].lead,
		items[2].lead,
		items[3].lead
	];

	const imageUrls = [
		items[0].imageUrl,
		items[1].imageUrl,
		items[2].imageUrl,
		items[3].imageUrl
	]
</script>

<section class="bg-white py-8 lg:py-10">
	<div class="container mx-auto w-full">
		<h2 class="h2-elem mb-8">These are also important to us</h2>
		<div class="lg:flex justify-between items-start ">
			<div class="mb-6 lg:mb-0 lg:w-2/6 lg:mr-10">
				<a class="border-0 w-full" href={`/blog/${slugs[0]}`}>
					<img
						class="rounded-3xl max-w-[400px] w-full object-cover mb-3 shadow-lg"
						src={imageUrls[0]}
						alt="ECO FRIENDLY Blog article"
					/>
				</a>
				<div class="flex w-full items-center justify-between">
					<div>
						<div class="h6-elem uppercase mb-3">{titles[0]}</div>
						<a class="small-outline-btn" href={`/blog/${slugs[0]}`}>Read more</a>
					</div>
					<div class="text-right">
						<span class="tag">#01</span>
						<p class="sm-secondary text-green">{leads[0]}</p>
					</div>
				</div>
			</div>
			<hr class="my-8 lg:hidden border-2 border-light-purple" />
			<div class="lg:4/6">
				<div class="mb-6 lg:flex">
					<a class="border-0 lg:mr-10 w-full" href={`/blog/${slugs[1]}`}>
						<img
							class="rounded-3xl max-w-[400px] w-full object-cover mb-3 shadow-lg drop-shadow-lg"
							src={imageUrls[1]}
							alt="WOOD TREATMENTS Blog article"
						/>
					</a>
					<div class="flex w-full items-center justify-between">
						<div class="w-full max-w-[207px]">
							<div class="h6-elem uppercase mb-3">{titles[1]}</div>
							<a class="small-outline-btn" href={`/blog/${slugs[1]}`}>Read more</a>
						</div>
						<div class="text-right max-w-[140px]">
							<span class="tag">#02</span>
							<p class="sm-secondary text-green">{leads[1]}</p>
						</div>
					</div>
				</div>
				<div class="mb-6 lg:flex">
					<a class="border-0 lg:mr-10 w-full" href={`/blog/${slugs[2]}`}>
						<img
							class="rounded-3xl max-w-[400px] w-full object-cover mb-3 shadow-lg drop-shadow-lg"
							src={imageUrls[2]}
							alt="FUMIGATION Blog article"
						/>
					</a>
					<div class="flex w-full justify-between items-center">
						<div class="w-full max-w-[207px]">
							<div class="h6-elem uppercase mb-3">{titles[2]}</div>
							<a class="small-outline-btn" href={`/blog/${slugs[2]}`}>Read more</a>
						</div>
						<div class="text-right max-w-[140px]">
							<span class="tag">#03</span>
							<p class="sm-secondary text-green">
								{leads[2]}
							</p>
						</div>
					</div>
				</div>
				<div class="lg:flex">
					<a class="border-0 lg:mr-10 w-full" href={`/blog/${slugs[3]}`}>
						<img
							class="rounded-3xl max-w-[400px] w-full object-cover mb-3 shadow-lg drop-shadow-lg"
							src={imageUrls[3]}
							alt="SAFETY FIRST Blog article"
						/>
					</a>
					<div class="w-full flex justify-between items-center">
						<div class="w-full max-w-[207px]">
							<div class="h6-elem uppercase mb-3">{titles[3]}</div>
							<a class="small-outline-btn" href={`/blog/${slugs[3]}`}>Read more</a>
						</div>
						<div class="text-right max-w-[140px]">
							<span class="tag">#04</span>
							<p class="sm-secondary text-green">{leads[3]}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
