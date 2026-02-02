"use client";

import Link from "next/link";

export default function ProfileErrorPage({ error }) {
  return (
    <>
      <h1>OOOOPPPPPSSSSS, the &apos;ville ain&apos;t here!</h1>

      {/* the message property in 'error' will show the actual dev error */}
      <p>{error.message}</p>

      <Link href={"/"} className="bg-blue-500 text-gray-300">
        HOME
      </Link>

      <Link href={"/profile:username"} className="bg-emerald-500 text-gray-300">
        YOUR PROFILE
      </Link>
    </>
  );
}
