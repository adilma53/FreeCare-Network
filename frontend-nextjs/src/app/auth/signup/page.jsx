import { Sign_up } from "@/components/Forms/signup/signup";
import { SignupCleaned } from "@/components/Forms/signup/SignupCleaned";

export const metadata = {
  title: "Sign up FreeCareNet",
  description: "Sing up to your account",
};
export default function Auth_Sign() {
  return (
    <>
      {/* <Sign_up /> */}
      <SignupCleaned />
    </>
  );
}
