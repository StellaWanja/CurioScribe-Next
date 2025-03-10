"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { ClerkAPIError } from "@clerk/types";

function useGoogleSignUpHandler() {
  const { isLoaded, signUp } = useSignUp();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>();

  async function handleGoogleSignUp() {
    // Clear any errors that may have occurred during previous form submission
    setErrors(undefined);
    setIsLoading(true);

    if (!isLoaded) return;

    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  }

  return { handleGoogleSignUp, isLoading, errors };
}

export default useGoogleSignUpHandler;
