import getUserData from '@/app/utils/getUserData';

export default async function UserPage({params: { id } }) {
    const data = await getUserData(id);
    return(
        <main>
            <h1>Usuario</h1>
            <div>{JSON.stringify(data, null, 2)}</div>
        </main>
    );
}