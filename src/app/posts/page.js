//TODO: Render a list of all posts
//- you could also render the user who posted them

import { db } from "@/utils/dbConnection.js";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

export default async function PostsPage() {
  const userInfo = await currentUser();

  const { rows } = await db.query(
    `SELECT clariville_posts.*, clariville_users.* FROM clariville_posts JOIN clariville_users ON clariville_posts.user_id = clariville_users.id;`,
  );

  console.log(rows);

  return (
    <>
      <Link href={`/profile/${userInfo.username}`} className="text-blue-600">
        PROFILE{" "}
      </Link>

      <h1>ALL POSTS</h1>

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
