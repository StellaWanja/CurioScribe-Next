"use client";

import React from "react";
import { NotebookText } from "lucide-react";

import useSignInHandler from "@/hooks/useSignInHandler";
import useGoogleSignInHandler from "@/hooks/useGoogleSignInHandler";

import Form from "./Form";
import GoogleSignIn from "./GoogleSignIn";

function SignInPage() {
  const {
    handleSubmit,
    isLoading: isSignInLoading,
    errors: signInErrors,
  } = useSignInHandler();

  const {
    handleGoogleSignin,
    isLoading: isGoogleSignInLoading,
    errors: googleSignInErrors,
  } = useGoogleSignInHandler();

  return (
    <div className="w-full min-h-screen flex items-center justify-center font-sans bg-darkblue">
      <div className="w-full max-w-md bg-white dark:bg-dashboardblue rounded-xl shadow-xl mx-4">
        <div className="flex flex-col items-center  space-y-1.5 p-6 text-darkgrey dark:text-white">
          <NotebookText className="stroke-[2.5] w-8 h-8" />
          <h2 className="mt-4 text-xl font-medium tracking-tight text-center">
            Sign In to CurioScribe
          </h2>
        </div>

        <Form
          errors={signInErrors ?? []}
          handleSubmit={handleSubmit}
          isLoading={isSignInLoading}
        />

        <GoogleSignIn
          handleGoogleSignIn={handleGoogleSignin}
          isLoading={isGoogleSignInLoading}
          errors={googleSignInErrors ?? []}
        />
      </div>
    </div>
  );
}

export default SignInPage;
