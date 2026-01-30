//TODO: Render a list of all posts
//- you could also render the user who posted them

import { db } from "@/utils/dbConnection.js";

export default async function PostsPage() {
  const { rows } = await db.query(
    `SELECT clariville_posts.*, clariville_users.* FROM clariville_posts JOIN clariville_users ON clariville_posts.user_id = clariville_users.id;`,
  );

  console.log(rows);

  return (
    <>
      <h1> TEST </h1>

      {rows.map((post) => {
        return (
          <>
            <div key={post.id}>
              <h1>{post.username}</h1>
              <p> {post.user_post}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
