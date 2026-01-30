//TODO: Render a sign-up page
//- use Clerk component

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h1>Sign in already - I got somethin&apos; for ya!</h1>
      <SignIn />
    </>
  );
}
