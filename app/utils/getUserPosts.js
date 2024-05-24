export default async function getUserPosts(id) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const data = await res.json();
    return data;
}