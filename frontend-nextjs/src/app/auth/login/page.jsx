import { Login } from "@/components/Forms/login/login";
import { LoginCleaned } from "@/components/Forms/login/LoginCleaned";

export const metadata = {
  title: "Login FreeCareNet",
  description: "Login to your account",
};
export default function Auth_Login() {
  return (
    <>
      {/* <Login /> */}
      <LoginCleaned />
    </>
  );
}
