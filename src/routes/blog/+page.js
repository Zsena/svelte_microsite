export const prerender = true;

const endpoint = "https://jsonplaceholder.typicode.com/posts";

async function apiFetch() {
    const res = await fetch(endpoint);
    return res.json();
}

export async function load() {

    const posts = await apiFetch()

    return {posts}
};