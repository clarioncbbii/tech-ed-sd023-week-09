//TODO: Render a home page with user navigation or intro to the app

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={`/posts`} className="text-blue-600">
        ALL POST
      </Link>
      <Link href={`/profile/:username`} className="text-blue-600">
        YOUR PROFILE
      </Link>
    </>
  );
}
