"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { ClerkAPIError } from "@clerk/types";

function useGoogleSignInHandler() {
  const { isLoaded, signIn } = useSignIn();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>();

  async function handleGoogleSignin() {
    // Clear any errors that may have occurred during previous form submission
    setErrors(undefined);
    setIsLoading(true);

    if (!isLoaded) return;

    try {
      await signIn.authenticateWithRedirect({
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

  return { handleGoogleSignin, isLoading, errors };
}

export default useGoogleSignInHandler;
