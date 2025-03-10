"use client";

import { ClerkAPIError } from "@clerk/types";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";

function useSignupHandler() {
  const { isLoaded, signUp } = useSignUp();

  const [errors, setErrors] = useState<ClerkAPIError[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    event.preventDefault();

    // Clear any errors that may have occurred during previous form submission
    setErrors(undefined);
    setIsLoading(true);

    if (!isLoaded) return;

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  }

  return { handleSubmit, errors, isLoading, pendingVerification };
}

export default useSignupHandler;
