<script>
	import {
		page
	} from '$app/stores';
	
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
	import Logo from "$lib/assets/images/svg/pest_logo.svg";
	
	import { error } from '@sveltejs/kit';
 
	/** @type {import('./$types').PageLoad} */
	export function load(event) {
		throw error(404, 'Not Found');
	}
</script> 

<header class="bg-gray-800 border-b border-slate-200 fixed top-0 right-0 left-0 w-full bg-white/90 z-20">
	<nav class="container px-8 py-5 lg:py-0 lg:px-4 mx-auto lg:flex lg:justify-between lg:items-center">
		<div class="lg:flex items-center">
			<div class="flex items-center justify-between lg:mr-10 xl:mr-20">
				<a class="flex border-0" href="/">
						<Logo /><div class="ml-5 border-r border-2 border-base-purple"></div>
				</a>
				<!-- Mobile menu button -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={toggleNavbar} class="flex lg:hidden">
					<button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
				</div>
			</div>
			<ul class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 {showMenu? 'flex': 'hidden'}">
				<li aria-current={$page.url.pathname==='/' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname==='/services' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/services">Services</a>
				</li>
				<li aria-current={$page.url.pathname==='/areas-we-cover' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/areas-we-cover">Areas we cover</a>
				</li>
				<li aria-current={$page.url.pathname==='/about' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/about">About Us</a>
				</li>
				<li aria-current={$page.url.pathname==='/blogs' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/blog">Blogs</a>
				</li>
			</ul>
		</div>
		<div class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 {showMenu? 'flex': 'hidden'}">
			<nav class="space-y-2">
				<ul class="sm:flex sm:items-center">
					<li aria-current={$page.url.pathname==='/pest-types' ? 'page' : undefined}>
						<a href="/pest-types" class="regular-outline-btn">
							Pest types
						</a>
					</li>
					<li class="my-8 sm:ml-3" aria-current={$page.url.pathname==='/contact' ? 'page' : undefined}>
						<a href="/contact" class="regular-btn">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</nav>
</header>
