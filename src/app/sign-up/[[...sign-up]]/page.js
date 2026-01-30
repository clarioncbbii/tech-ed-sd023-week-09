//TODO: Render a sign-up page
//- use Clerk component
//- A form to collect other user data (bio, nickname, location, interests, etc.). This makes the page more useful by bundling all sign up data in one go
// Insert user's data into users table, so we can render it in the profile page

import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <>
      <h1>Sign up already - you don&apos;t wanna miss out!</h1>
      <SignUp />
    </>
  );
}

//* Extra: Create another nested route called create-profile, where the user can complete their personal info as a second step in the sign-up process
// see env vars for redirect
