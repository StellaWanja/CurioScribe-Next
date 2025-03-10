"use client";

import React, { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { ClerkAPIError } from "@clerk/types";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useRouter } from "next/navigation";

function useSignInHandler() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>();

  async function handleSubmit(
    event: React.FormEvent,
    emailAddress: string,
    password: string
  ) {
    event.preventDefault();

    // Clear any errors that may have occurred during previous form submission
    setErrors(undefined);
    setIsLoading(true);

    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        console.error(JSON.stringify(result, null, 2));
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  }

  return { handleSubmit, isLoading, errors };
}

export default useSignInHandler;
