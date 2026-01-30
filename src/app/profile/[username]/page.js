//TODO: Render users' data
//- READ user's data from the table (username, email, bio, location, etc.)
//- READ user's posts: render a list of user's personal posts (use a SQL query to filter the data)

//! MANNY'S TIPS:
//- The Clerk user ID does NOT exist until the user signs up
//--> show sign-up and sign-in buttons first thing (e.g. your Home page can be public,the rest of the routes are protected)

//* RESOURCES:
//- currentUser() and the auth() helper are two tools that will be useful to destructure from it
// https://clerk.com/docs/reference/nextjs/app-router/current-user
// https://clerk.com/docs/reference/nextjs/app-router/auth
//- optional chaining will also be of great help this week

import { db } from "@/utils/dbConnection.js";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ProfilePage() {
  const userInfo = await currentUser();

  //db queries to GET data from the tables
  const { rows } = await db.query(
    `SELECT clariville_posts.*, clariville_users.* FROM clariville_posts JOIN clariville_users ON clariville_posts.user_id = clariville_users.id;`,
  );

  console.log(rows);

  return (
    <>
      <Link href={`/posts`} className="text-blue-600">
        HOME
      </Link>

      <h1> Hello {userInfo.username}, welcome to your profile! </h1>

      <div>
        <h2> YOUR PROFILE INFO:</h2>
        <p>Username: {userInfo.username} </p>
      </div>
      <div>
        <h2> YOUR POSTS:</h2>
        {rows.map((user) => {
          return (
            <>
              <div key={user.id}>
                <p> {user.user_post}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
