import getUsers from "./utils/getUsers";
import Link from "next/link";


/*
async function getDogPicture(){
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'no-cache',  //esto es para q no se guarde la fotos en cache y siempre aparezca una nueva foto
  }); 
  const data = await res.json();
  return data;
  }


export default async function Home() {
const data = await getDogPicture();
  return (
    <main>
      <h1>Usuarios</h1>
      <img src={data.message}/>
    </main>
  );
}
*/


export default async function Home() {
  const data = await getUsers ();
  return (
    <main  className="p-10">
      <h1>Usuarios</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link
              style={{border: '1px solid black'}}
              href={`/users/${user.id}`}
            >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            </Link>
          </li>
        ))}
      </ul>

    </main>
  );
}
    
