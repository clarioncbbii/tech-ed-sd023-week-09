"use client";

import Link from "next/link";

export default function ProfileErrorPage({ error }) {
  return (
    <>
      <h1>OOOOPPPPPSSSSS, the apos;ville is down!</h1>
      {/* the message property in 'error' will show the actual dev error */}
      <p>{error.message}</p>
      <Link href={"/"}>HOME</Link>
    </>
  );
}
