export const prerender = true;


// const endpoint = "https://jsonplaceholder.typicode.com/posts";

// async function apiFetch() {
//     const res = await fetch(endpoint);
//     return res.json();
// }

export async function load(param) {

    // const posts = await apiFetch()

    const id = param.url.pathname.replace("/blog/", "");

    console.log(id);

    return {id}
};