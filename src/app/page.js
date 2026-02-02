//TODO: Render a home page with user navigation or intro to the app

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
      <h1>HOME PAGE</h1>

      <SignedOut>{""}</SignedOut>
      {/* if the user is signed in, they can see the user button */}
      <SignedIn>
        <Link href={`/posts`} className="text-blue-600">
          ALL POSTS
        </Link>
        <Link href={`/profile/:username`} className="text-blue-600">
          YOUR PROFILE
        </Link>
      </SignedIn>
    </>
  );
}
