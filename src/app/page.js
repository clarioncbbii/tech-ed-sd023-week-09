//TODO: Render a home page with user navigation or intro to the app

import Link from "next/link";
import { SignedIn, SignedOut, currentUser } from "@clerk/nextjs";

export default function HomePage() {

  const userInfo = await currentUser();
  
  return (
    <>
      <h1>HOME PAGE</h1>

      <SignedOut>{""}</SignedOut>
      {/* if the user is signed in, they can see the user button */}
      <SignedIn>
        <Link href={`/posts`} className="text-blue-600">
          ALL POSTS
        </Link>
        <Link href={`/profile/${userInfo.username}`} className="text-blue-600">
          YOUR PROFILE
        </Link>
      </SignedIn>
    </>
  );
}
