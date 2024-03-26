"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Link, Spinner } from "@nextui-org/react";
import { EyeFill, EyeSlash } from "./Eyeslashed";

import { useRouter } from "next/navigation";

import { signIn, useSession } from "next-auth/react";
export function LoginCleaned() {
  const router = useRouter();

  // protect route

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }
  // if not authenticated redirect to home page
  // if (status === "loading") {
  //   return <Spinner color="primary" />;
  // }

  const [Email, setEmail] = useState("example@email.com");
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const [Password, setPassword] = useState("yourpassword2024");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // ---------------------------------------
  const [errorLoginUpMessage, setErrorLoginUpMessage] = useState(null);
  const [sucessLoginMessage, setSucessLoginMessage] = useState(null);

  // ---------------------------------------

  const isEmailValid = React.useMemo(() => {
    if (Email === "") return false;
    return validateEmail(Email) ? false : true;
  }, [Email]);

  const isPasswordValid = React.useMemo(() => {
    return Password.length < 8;
  }, [Password]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email: Email,
      password: Password,
    };

    const signInData = await signIn("credentials", {
      ...formData,
      redirect: false, // Prevent automatic redirection
    });

    if (!signInData.ok) {
      setErrorLoginUpMessage("wrong credentials");
    } else {
      setSucessLoginMessage("Welcome");
      router.push("/admin"); // Move the route change here
    }
  };

  // show loading ui if loading
  if (status === "loading") {
    return <Spinner className="h-screen w-full" color="primary" />;
  }
  if (status === "unauthenticated" && status !== "loading") {
    return (
      <div className="flex justify-center items-center pt-8">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-4">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold whitespace-nowrap tracking-tight text-2xl text-center">
              Welcome to FreeCare Net
            </h3>
          </div>
          <form onSubmit={handleLogin} className="p-6 space-y-4 px-4 py-4">
            {errorLoginUpMessage && (
              <Button
                className="w-full"
                isDisabled
                radius="none"
                size="lg"
                variant="flat"
                color="danger"
              >
                {errorLoginUpMessage}
              </Button>
            )}
            {sucessLoginMessage && (
              <Button
                className="w-full"
                isDisabled
                radius="none"
                size="lg"
                variant="flat"
                color="success"
              >
                {sucessLoginMessage}
              </Button>
            )}
            <div className="space-y-2">
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
            <Link href="/auth/signup" underline="hover">
              Create Account
            </Link>
            <div className="flex items-center p-5">
              <Button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
