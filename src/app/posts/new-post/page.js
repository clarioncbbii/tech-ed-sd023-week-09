//TODO: Render a form to INSERT post data into the posts table
//- We also need to insert the userId into the posts table
//- Make sure you have some SQL that READS the userId from the user's table OR use the auth() function from Clerk to get the userId

import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation"; //! DO NOT USE THE DIST FOLDER VERSION IN THE DROP-DOWN MENU
import { auth } from "@clerk/nextjs/server";

export default async function NewPostPage() {
  const { userId } = await auth();

  async function handleSubmit(rawFormData) {
    "use server";

    console.log(rawFormData);

    const { userPost } = {
      // input names of the form as the values
      userPost: rawFormData.get("userPost"),
    };

    //insert formValues in the database
    db.query(
      `INSERT INTO clariville_posts (user_post, user_id) VALUES ($1, $2)`,
      [userPost, userId],
    );

    //* redirect the user to the posts page
    redirect("/posts");
  }

  return (
    <>
      <h1>CREATE A POST - WE CANNOT WAIT TO READ IT!</h1>
      <form action={handleSubmit}>
        <label htmlFor="userPost">My post: </label>
        <input type="text" name="userPost" required />
        <button className="bg-amber-600">SUBMIT</button>
      </form>
    </>
  );
}
