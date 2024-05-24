import getUserData from '@/app/utils/getUserData';
import getUserPosts from '@/app/utils/getUserPosts';

export default async function UserPage({params: { id } }) {
    const dataP = getUserData(id);
    const postsP =  getUserPosts(id);

    const [data, posts] = await Promise.all([dataP, postsP]);
    return(
        <main className="p-10">
            <h1>Usuario: </h1>
            <p>{data.name}</p>
            <p>{data.email}</p>

            <h2>Posts</h2>
            {
                posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))
            }
            <ul></ul>
        </main>
    );
}