export async function load(param) {

    // const posts = await apiFetch()

    const id = param.url.pathname.replace("/pest-types/", "");

    console.log(id);

    return {id}
};