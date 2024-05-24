export default async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();

    return data;
}