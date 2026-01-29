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

export default function ProfilePage() {
  //db queries to GET data from the tables

  return (
    <>
      <h1> User&apos;s info</h1>
      <h1> User&apos;s posts</h1>
    </>
  );
}
