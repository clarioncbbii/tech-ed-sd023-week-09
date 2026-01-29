//TODO: Render a sign-up page
//- use Clerk component
//- A form to collect other user data (bio, nickname, location, interests, etc.). This makes the page more useful by bundling all sign up data in one go
// Insert user's data into users table, so we can render it in the profile page

//* Extra: Create another nested route called createProfile, where the user can complete their personal info as a second step in the sign-up process

export default function SignupPage() {
  return (
    <>
      {/* Clerk component */}
      <form>
        <input type="text" name="nickname" />
        <textarea type="text" name="bio" />
        <input type="number" name="age" />
      </form>
    </>
  );
}
