import Link from "next/link";

export default function ProfileNotFoundPage() {
  return (
    <>
      <h1>Sorry, we can&apos;t find who you&apos;re looking for!</h1>
      <Link href={"/"} className="bg-emerald-500 text-gray-300">
        HOME
      </Link>{" "}
    </>
  );
}
