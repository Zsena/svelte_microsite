<script>
	import PestType from '$lib/assets/components/PestType.svelte';
	import Triangle from '$lib/assets/svg/triangle.svg';
	import TriangleMobile from '$lib/assets/svg/triangle_mobile.svg';
	import Dot from '$lib/assets/svg/dot.svg';
	import Flower from '$lib/assets/svg/flower.svg';
	import CircleInfo from '$lib/assets/svg/circle-info.svg';
	import { onDestroy } from 'svelte';
	import CallToAction from '../lib/assets/components/action/CallToAction.svelte';
	import Blog from '../lib/assets/components/blog/Blog.svelte';
	import Testimonials from '$lib/assets/components/action/Testimonials.svelte';

	let counter1 = 0;
	let counter2 = 0;
	let counter3 = 0;
	let duration1 = 80;
	let duration2 = 10;

	const interval = setInterval(() => {
		if (counter1 < 98) {
			counter1 = counter1 + 1;
		}

		if (counter3 < 100) {
			counter3 = counter3 + 1;
		}
	}, duration1);

	const intervalSecond = setInterval(() => {
		if (counter2 < 1000) {
			counter2 = counter2 + 1;
		}
	}, duration2);

	onDestroy(() => {
		clearInterval(interval);
		clearInterval(intervalSecond);
	});
</script>

<!-- HERO -->
<section class="main-hero py-10 md:py-10">
	<div class="container mx-auto md:flex items-center mb-12">
		<article class="w-full lg:w-1/2 relative">
			<div class="absolute top-16 left-0 z-0">
				<Triangle class="hidden lg:block w-full" />
				<TriangleMobile class="lg:hidden w-full" />
			</div>
			<div class="relative z-10 max-w-[551px]">
				<h1 class="h1-elem mb-8" style="letter-spacing: 2px;">
					Having unwanted pests in your home is never a pleasant experience and can cause a lot of
					heartache.
				</h1>
				<a href="/contact" class="regular-btn py-4 text-xl">Explore Now </a>
			</div>
			<section class="base-counter mt-16">
				<div class="counter-wrapper">
					<div class="counter-card">
						<i class="fab fa-youtube fa-4x" />
						<div class="counter-num">{counter1} <span>+</span></div>
						<h2 class="counter-text">qualified pest control experts</h2>
					</div>
					<div class="counter-card">
						<i class="fab fa-twitter fa-4x" />
						<div class="counter-num">{counter2} <span>k+</span></div>
						<h2 class="counter-text">Customers trust us each month</h2>
					</div>
					<div class="counter-card">
						<i class="fab fa-facebook fa-4x" />
						<div class="counter-num">{counter3} <span>%</span></div>
						<h2 class="counter-text">pest treatments carried</h2>
					</div>
				</div>
			</section>
		</article>
		<section class="w-full lg:w-1/2 mt-10 lg:mt-0">
			<div class="relative">
				<img class="w-full object-cover max-w-[600px] relative z-[1]" src="../images/main-hero.png" alt="Hero" />
				<div
					class="text-white absolute z-10 top-8 lg:top-4 left-12 md:left-20 lg:left-32 bg-white/40 p-2 rounded-xl backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-0"
				>
					<h2 class="text-base lg:text-[26px] font-bold">BED BUG PEST <br /> CONTROL</h2>
					<h3 class="text-sm lg:text-xl font-bold">London</h3>
				</div>
				<div
					class="md:text-white relative lft-0 md:absolute z-10 bottom-8 lg:bottom-4 md:left-20 lg:left-32 md:max-w-[55%] w-full bg-white/25 p-3 rounded-xl backdrop-blur-lg"
				>
					<div class="absolute -top-[6rem] right-0 md:-top-[7rem] md:-left-[8.75rem]">
						<CircleInfo />
					</div>
					<p class="text-xs font-medium">How many people are going?</p>
					<div
						class="flex items-center md:flex-col md:items-start lg:flex-row lg:items-center lg:justify-between"
					>
						<p class="text-xl flex items-center font-bold w-full">
							<span><Flower /></span>
							<span class="ml-3">2 person</span>
						</p>
						<p class="text-xs font-bold text-right w-full">EMERGENCY 24 HOUR</p>
					</div>
				</div>
				<Dot class="absolute -bottom-[35px] -left-[35px] z-0" />
			</div>
		</section>
	</div>
</section>
<!-- HERO end -->
<CallToAction />
<Blog />
<!-- TYPES SECTION -->
<PestType />
<!-- TYPES SECTION end -->


<!-- Collection SECTION -->
<section class="bg-light-purple/80 py-8 lg:py-10">
	<div class="container mx-auto w-full">
		<h2 class="h2-elem mb-8">Local experts in pest control solutions & best services</h2>
		<div class="lg:flex justify-between items-start " />
	</div>
</section>
<!-- Collection SECTION end -->
<Testimonials />
<!-- TEXT SECTION -->
<section class="bg-white py-8 lg:py-10">
	<div class="container mx-auto w-full">
		<h2 class="h2-elem mb-8">About us</h2>
		<div class="lg:flex justify-between items-start " />
	</div>
</section>
<!-- TEXT SECTION end -->



