"use client";
import React, { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { EyeFill, EyeSlash } from "@/components/Forms/login/Eyeslashed";
// import { useRouter } from 'next/router';

export function SignupCleaned() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("example@email.com");
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const [Password, setPassword] = useState("yourpassword2024");
  const [isVisible, setIsVisible] = useState(false);

  // ---------------------------------------
  const [errorSignUpMessage, setErrorSignUpMessage] = useState(null);
  const [sucessSignupMessage, setSucessSignupMessage] = useState(null);

  // const router = useRouter();
  // ---------------------------------------
  const toggleVisibility = () => setIsVisible(!isVisible);

  const isEmailValid = React.useMemo(() => {
    if (Email === "") return false;
    return validateEmail(Email) ? false : true;
  }, [Email]);

  const isPasswordValid = React.useMemo(() => {
    return Password.length < 8;
  }, [Password]);

  // ---------------------------------------------------------------

  //fetching
  const handleSignup = async (e) => {
    e.preventDefault();

    // setting up data back to null
    setErrorSignUpMessage(null);
    setSucessSignupMessage(null);

    const formData = {
      email: Email,
      username: Name, // Assuming full name will be used as the username
      password: Password,
    };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // set the error to display it to the user
        const errorRes = await response.json();

        setErrorSignUpMessage(errorRes.message);
        throw new Error(errorRes.message || "Something went wrong");
      } else {
        // log success mesage to the ui
        const sucessRes = await response.json();

        setSucessSignupMessage(sucessRes.message);
      }

      // Optionally, you can redirect the user to another page after successful signup
    } catch (error) {
      console.error("Signup failed:", error.message);
      // Handle error (e.g., display error message to the user)
    }
  };
  // ---------------------------------------------------------------------
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-4">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold whitespace-nowrap tracking-tight text-2xl text-center">
            Sign up to FreeCareNet
          </h3>
        </div>
        <form onSubmit={handleSignup} className="p-6 space-y-4">
          {errorSignUpMessage && (
            <Button
              className="w-full"
              isDisabled
              radius="none"
              size="lg"
              variant="flat"
              color="danger"
            >
              {errorSignUpMessage}
            </Button>
          )}
          {sucessSignupMessage && (
            <Button
              className="w-full"
              isDisabled
              radius="none"
              size="lg"
              variant="flat"
              color="success"
            >
              {sucessSignupMessage}
            </Button>
          )}
          <div className="space-y-2">
            <label className="text-base font-semibold leading-none">
              Your Username
            </label>
            <Input
              isRequired
              value={Name}
              type="full_name"
              label="Username"
              variant="bordered"
              placeholder="Enter your Username"
              onValueChange={setName}
              className="max-w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-base font-semibold leading-none">
              Email
            </label>
            <Input
              value={Email}
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={isEmailValid}
              color={isEmailValid ? "danger" : "success"}
              errorMessage={isEmailValid && "Please enter a valid email"}
              onValueChange={setEmail}
              className="max-w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-base font-semibold leading-none">
              Password
            </label>
            <Input
              value={Password}
              label="Password"
              isInvalid={isPasswordValid}
              color={isPasswordValid ? "danger" : "success"}
              errorMessage={
                isPasswordValid && "Your password should be 8 characters"
              }
              onValueChange={setPassword}
              variant="bordered"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
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
          <Link href="/auth/login" underline="hover">
            Already have an account?
          </Link>
          <div className="flex items-center p-5">
            <Button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              disabled={isEmailValid || isPasswordValid}
            >
              Sign Up
            </Button>
          </div>
          {/* <Text h1 color="error">
            Almost before we knew it, we had left the ground.
          </Text> */}
          {/* <p>{errorSignUp}</p> */}
        </form>
      </div>
    </div>
  );
}
