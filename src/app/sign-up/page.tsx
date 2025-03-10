"use client";

import React from "react";
import { NotebookText } from "lucide-react";

import useSignupHandler from "@/hooks/useSignupHandler";
import useVerificationHandler from "@/hooks/useVerificationHandler";
import useGoogleSignUpHandler from "@/hooks/useGoogleSignUpHandler";

import Form from "./Form";
import Verification from "./Verification";
import GoogleSignUp from "./GoogleSignUp";

function SignUpPage() {
  const {
    handleSubmit,
    pendingVerification,
    errors: signUpErrors,
    isLoading: isSignUpLoading,
  } = useSignupHandler();

  const {
    handleVerification,
    errors: verificationErrors,
    isLoading: isVerifyLoading,
  } = useVerificationHandler();

  const {
    handleGoogleSignUp,
    isLoading: isGoogleSignUpLoading,
    errors: googleSignUpErrors,
  } = useGoogleSignUpHandler();

  return (
    <div className="w-full min-h-screen flex items-center justify-center font-sans bg-darkblue">
      <div className="w-full max-w-md bg-white dark:bg-dashboardblue rounded-xl shadow-xl mx-4">
        <div className="flex flex-col items-center  space-y-1.5 p-6 text-darkgrey dark:text-white">
          <NotebookText className="stroke-[2.5] w-8 h-8" />
          <h2 className="mt-4 text-xl font-medium tracking-tight text-center">
            Sign Up to CurioScribe
          </h2>
        </div>

        {!pendingVerification ? (
          <Form
            errors={signUpErrors ?? []}
            handleSubmit={handleSubmit}
            isLoading={isSignUpLoading}
          />
        ) : (
          <Verification
            handleVerification={handleVerification}
            errors={verificationErrors ?? []}
            isLoading={isVerifyLoading}
          />
        )}

        {!pendingVerification && (
          <GoogleSignUp
            handleGoogleSignUp={handleGoogleSignUp}
            isLoading={isGoogleSignUpLoading}
            errors={googleSignUpErrors ?? []}
          />
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
