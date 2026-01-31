"use client";

import Link from "next/link";

export default function ProfileErrorPage({ error }) {
  return (
    <>
      <h1>
        OOOOPPPPPSSSSS, rollercoaster down! You will get a refund, don&apos;t
        worry.
      </h1>
      {/* the message property in 'error' will show the actual dev error */}
      <p>{error.message}</p>
      <Link href={"/"}>HOME</Link>
    </>
  );
}
