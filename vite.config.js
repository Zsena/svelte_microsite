import { sveltekit } from '@sveltejs/kit/vite';
import { svelteSVG } from "rollup-plugin-svelte-svg";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		svelteSVG({
            // optional SVGO options
            // pass empty object to enable defaults
            svgo: {},
            // vite-specific
            // https://vitejs.dev/guide/api-plugin.html#plugin-ordering
            // enforce: 'pre' | 'post'
            enforce: "pre",
        }),
	]
};

export default config;
