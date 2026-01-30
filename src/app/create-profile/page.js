import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation"; //! DO NOT USE THE DIST FOLDER VERSION
import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";

export default async function CreateProfilePage() {
  //* to handle the form submission --> a server function (P.S. server actions = server functions)
  //a server function is an async function that executes in the server specifically

  const { userId } = await auth();
  const userInfo = await currentUser();
  // see documentation: https://clerk.com/docs/reference/nextjs/app-router/current-user

  async function handleSubmit(rawFormData) {
    //the "use server" directive tells the function where we want it to execute (with this, we change the behaviour of this function)
    "use server";
    //the rawFormData parameter will be the placeholders for the user's input
    //* storing form values --> use an object

    console.log(rawFormData);

    const { username, location, bio, interests } = {
      // input names of the form as the values
      username: rawFormData.get("username"),
      location: rawFormData.get("location"),
      bio: rawFormData.get("bio"),
      interests: rawFormData.get("interests"),
    };

    //insert formValues in the database
    db.query(
      `INSERT INTO clariville_users (id, username, location, bio, interests) VALUES ($1, $2, $3, $4, $5)`,
      [userId, username, location, bio, interests],
    );

    //* redirect the user to the posts page
    redirect("/posts");
  }

  return (
    <>
      <h1>COMPLETE YOUR CLARIVILLE PROFILE</h1>
      <form action={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          maxLength={255}
          defaultValue={userInfo?.username}
        />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          maxLength={255}
          placeholder="City, County, Country"
        />
        <label htmlFor="bio">Bio: </label>
        <input type="text" name="bio" placeholder="Let's get acquainted!" />
        <label htmlFor="interests">Interests: </label>
        <input
          type="text"
          name="interests"
          placeholder="What makes you tick?"
        />
        <button className="bg-amber-600">SUBMIT</button>
      </form>
    </>
  );
}
