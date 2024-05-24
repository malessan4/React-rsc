export default async function getUserDate(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();

    return data;
}