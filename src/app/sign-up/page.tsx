"use client";

import React, { useState } from "react";
import { NotebookText } from "lucide-react";

import useSignupHandler from "@/hooks/useSignupHandler";

import Form from "./Form";
import Verification from "./Verification";
import GoogleSignUp from "./GoogleSignUp";

function SignUpPage() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const { handleSubmit, errors, isLoading, pendingVerification } =
    useSignupHandler();

  return (
    <div className="w-full min-h-screen flex items-center justify-center font-sans bg-darkblue">
      <div className="w-full max-w-md bg-white rounded-xl sm:border-2 shadow-md mx-4">
        <div className="flex flex-col items-center  space-y-1.5 p-6">
          <NotebookText className="stroke-[2.5] w-8 h-8" />
          <h2 className="mt-4 text-xl font-medium tracking-tight text-center">
            Sign Up to CurioScribe
          </h2>
        </div>

        {!pendingVerification ? (
          <Form
            errors={errors ?? []}
            handleSubmit={(e) => handleSubmit(e, emailAddress, password)}
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            password={password}
            setPassword={setPassword}
          />
        ) : (
          <Verification isLoading={isLoading} errors={errors ?? []} />
        )}

        {!pendingVerification && <GoogleSignUp isLoading={isLoading} />}
      </div>
    </div>
  );
}

export default SignUpPage;
