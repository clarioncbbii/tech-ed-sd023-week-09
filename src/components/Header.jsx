//TODO: Clerk UI components for navigation and user auth info

//Clerk components for UI
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Header() {
  //when the user is signed in, they see the user button; when the user is signed out, they see the login buttons
  return (
    <>
      {/* if the user is signed out, they can see the sign up button and the sign in button*/}
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      {/* if the user is signed in, they can see the user button */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}

//*NOTE: We didn't have to build any of these components - they are all Clerk components
