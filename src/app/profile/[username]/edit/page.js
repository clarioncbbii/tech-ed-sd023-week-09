//TODO: to update their personal info
//correct data
//to tell the user to complete ALL inputs, not just the ones they want to change

//Tools:
//- form --> user UI
//- server function --> trigger the update
//- SQL query to update
//- params

//Extra: pre-fill form for better UX
//- get db data first
//- pre-fill the form with the current data from the db --> defaultValue

import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function EditProfilePage() {
  const { userId } = await auth();
  const userInfo = await currentUser();

  //get current rollercoaster data
  const query = await db.query(`SELECT * FROM clariville_users WHERE id = $1`, [
    userId,
  ]);

  const data = query.rows[0];
  console.log(data);

  async function handleUpdate(rawFormData) {
    //update logic

    "use server";

    //input values
    const { location, bio, interests } = {
      // input names of the form as the values
      location: rawFormData.get("location"),
      bio: rawFormData.get("bio"),
      interests: rawFormData.get("interests"),
    };

    db.query(
      `UPDATE clariville_users SET username = $1, location = $2, bio = $3, interests = $4 WHERE id = $5`,
      [userInfo.username, location, bio, interests, userId],
    );

    //UX
    // revalidatePath(`/profile/${userId}/edit`);
    redirect(`/profile/${userId}`);
  }

  return (
    <>
      <Link href={`/profile/${userInfo.username}`} className="text-blue-600">
        YOUR PROFILE
      </Link>

      <h1> Hello {userInfo.username}, edit your profile below: </h1>

      <form action={handleUpdate}>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          max={255}
          required
          defaultValue={data?.location}
        />

        <label htmlFor="bio">Bio: </label>
        <input type="text" name="bio" required defaultValue={data?.bio} />

        <label htmlFor="interests">Interests: </label>
        <input
          type="text"
          name="interests"
          required
          defaultValue={data?.interests}
        />

        <button className="bg-amber-600">SUBMIT</button>
      </form>
    </>
  );
}
