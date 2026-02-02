"use client";

import Link from "next/link";

export default function PostsErrorPage({ error }) {
  return (
    <>
      <h1>
        OOOOPPPPPSSSSS, the &apos;ville is not here! Come on, let&apos;s get you
        on your way.
      </h1>
      {/* the message property in 'error' will show the actual dev error */}
      <p>{error.message}</p>
      <Link href={"/"} className="text-blue-600">
        HOME
      </Link>
    </>
  );
}
