import React from "react";

async function UserPosts({promise}) {
    const posts = await promise;
    return (
        <div>
            {posts.map(post => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                </li>
            ))}
        </div>
    );
}

export default UserPosts;