"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ClerkAPIError } from "@clerk/types";
import { NotebookText, Eye, EyeOff, Loader } from "lucide-react";

import Spinner from "@/components/ui/Spinner";
import ThemeSwitcher from "@/utils/Theme/ThemeSwitcher";
import Button from "@/components/ui/Button";

function SignUpPage() {
  //   const { isLoaded, setActive, signUp } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState<ClerkAPIError[]>();
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  //   if (!isLoaded) {
  //     return <Spinner />;
  //   }

  function handleSubmit() {}

  return (
    <div className="w-full min-h-screen flex items-center justify-center font-sans bg-darkblue">

      <div className="w-full max-w-md bg-white rounded-xl sm:border-2 shadow-md mx-4">
        <div className="flex flex-col items-center  space-y-1.5 p-6">
          <NotebookText className="stroke-[2.5] w-8 h-8" />
          <h2 className="mt-4 text-xl font-medium tracking-tight text-center">
            Sign Up to CurioScribe
          </h2>
        </div>

        <div className="p-6 pt-0">
          <form className="">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={emailAddress}
                onChange={(event) => setEmailAddress(event.target.value)}
                placeholder="Email"
                required
                className="input rounded-md p-2"
              />
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <label htmlFor="password" className="text-lg">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  required
                  className="w-full input rounded-md p-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {errors && (
              <p className="text-red-500 mt-4 text-center">
                Error: {errors[0].message}{" "}
              </p>
            )}

            <Button
              type="submit"
              className="solid-button mt-4 w-full rounded-md"
            >
              Sign Up
            </Button>
          </form>

          <p className="text-sm text-center pt-4 text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-center p-6 pt-0">
          <div className="rounded-xl bg-darkblue p-5 w-full">
            <p className="mb-4 text-center text-sm text-white">
              Alternatively, sign up with these platforms
            </p>
            <button
              className="w-full bg-white hover:bg-lightgrey transition delay-100 ease-in p-2 rounded-md font-bold flex justify-center items-center gap-2 "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden
                className="size-4"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              Sign up with Google{" "}
              {isLoading && <Loader className="animate-spin" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
