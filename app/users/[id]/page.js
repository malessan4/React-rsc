import getUserData from '@/app/utils/getUserData';
import getUserPosts from '@/app/utils/getUserPosts';
import { Suspense } from 'react';
import UserPosts from '@/app/components/UserPosts';

export default async function UserPage({params: { id } }) {
    const dataP = getUserData(id); // dataP de Promise
    const postsP =  getUserPosts(id);

    const data = await dataP;
    return(
        <main className="p-10">
            <h1>Usuario: </h1>
            <p>{data.name}</p>
            <p>{data.email}</p>

            <h2>Posts</h2>

            <Suspense fallback={<p>Cargando...</p>}>
                <UserPosts promise={postsP} />
            </Suspense>
        </main>
    );
}