"use client"
import React from "react";
import { Input, Link } from "@nextui-org/react";
import { EyeFill, EyeSlash } from "./Eyeslashed";


export function Login() {
  const [Email, setEmail] = React.useState("examlpe@email.com");
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const [Passowrd, setPwd] = React.useState("yourpassword2024");
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible); // for Eye password

  // validate email using regix
  const VEmail = React.useMemo(() => {
    if (Email === "") return false;

    return validateEmail(Email) ? false : true;
  }, [Email]);

  // validate passowrd
  const VPassword = React.useMemo(() => {
    return Passowrd.length < 8;
  }, [Passowrd]);

  // hand login submit

  const Handle_login = async (e) => {
    // prevent data 
    e.preventDefault();
    const formData = {
      email: Email,
      passwor: Passowrd
    };
    console.log(JSON.stringify(formData));
  }
  return (
    <>
      <div className="flex justify-center items-center pt-8 ">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-4" >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold whitespace-nowrap tracking-tight text-2xl text-center">Welcome to FreeCare Net</h3>
          </div>
          <form onSubmit={Handle_login} className="p-6 space-y-4 px-4 py-4">
            <div className="space-y-2">
              <label
                className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <Input
                value={Email}
                type="email"
                label="Email"
                variant="bordered"
                isInvalid={VEmail}
                color={VEmail ? "danger" : "success"}
                errorMessage={VEmail && "Please enter a valid email"}
                onValueChange={setEmail}
                className="max-w-full"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <Input
                value={Passowrd}
                label="Password"
                isInvalid={VPassword}
                color={VPassword ? "danger" : "success"}
                errorMessage={VPassword && "Your password should be 8 character"}
                onValueChange={setPwd}
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeSlash className="text-2xl text-gray-400 pointer-events-none" />
                    ) : (
                      <EyeFill className="text-2xl text-gray-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-full"
              />
            </div>
            <Link href="/auth/signup" underline="hover"> Create Account </Link>
            <div className="flex items-center p-5">
              <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
