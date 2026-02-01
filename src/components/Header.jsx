import { NavigationMenu } from "radix-ui";
import styles from "./Header.module.css";

//TODO: Clerk UI components for navigation and user auth info

//Clerk components for UI
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default async function Header() {
  //when the user is signed in, they see the user button; when the user is signed out, they see the login buttons
  return (
    <>
      <NavigationMenu.Root className={styles.Root}>
        <NavigationMenu.List className={styles.MenuList}>
          <NavigationMenu.Item>
            {/* if the user is signed out, they can see the sign up button and the sign in button*/}
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            {/* if the user is signed in, they can see the user button */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
}

// {/* if the user is signed out, they can see the sign up button and the sign in button*/}
//       <SignedOut>
//         <SignInButton />
//         <SignUpButton />
//       </SignedOut>
//       {/* if the user is signed in, they can see the user button */}
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
