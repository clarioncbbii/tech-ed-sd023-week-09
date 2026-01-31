import Link from "next/link";

export default function ProfileNotFoundPage() {
  return (
    <>
      <h1>Sorry, we cannot find this rollercoaster!</h1>
      <h2>This was a bumpy road, but the next ride will be more fun!</h2>
      <Link href={"/rollercoasters"} className="bg-emerald-500 text-gray-300">
        Go back to the list of rollercoasters
      </Link>{" "}
      <Link href={"/new-rollercoaster"} className="bg-sky-500 text-gray-300">
        Add a new one!
      </Link>
    </>
  );
}
