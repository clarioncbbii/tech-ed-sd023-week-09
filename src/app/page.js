//TODO: Render a home page with user navigation or intro to the app

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>HOME PAGE</h1>

      <Link href={`/posts`} className="text-blue-600">
        ALL POSTS
      </Link>

      <Link href={`/profile/:username`} className="text-blue-600">
        YOUR PROFILE
      </Link>
    </>
  );
}
