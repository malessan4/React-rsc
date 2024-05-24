export default async function getUserPosts(id) {
    //simulamos una demora en la carga de la data
await new Promise(resolve => setTimeout(resolve, 5000));
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const data = await res.json();
    return data;
}