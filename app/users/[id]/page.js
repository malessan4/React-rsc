import getUserData from '@/app/utils/getUserData';
import getUserPosts from '@/app/utils/getUserPosts';

export default async function UserPage({params: { id } }) {
    const data = await getUserData(id);
    const posts = await getUserPosts(id);
    return(
        <main className="p-30">
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