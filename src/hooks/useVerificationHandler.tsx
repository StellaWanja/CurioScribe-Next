"use client";

import { useSignUp } from "@clerk/nextjs";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { ClerkAPIError } from "@clerk/types";

import Spinner from "@/components/ui/Spinner";

function useVerificationHandler() {
  const router = useRouter();

  const [errors, setErrors] = useState<ClerkAPIError[]>();
  const [isLoading, setIsLoading] = useState(false);

  const { isLoaded, signUp, setActive } = useSignUp();

  async function handleVerification(
    event: React.FormEvent<HTMLFormElement>,
    code: string
  ) {
    event.preventDefault();

    setErrors([]);
    setIsLoading(true);
    console.log(code);

    if (!isLoaded) {
      return <Spinner />;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        return (
          <div className="w-full flex items-center justify-center font-bold">
            Unable to signup
          </div>
        );
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    }
    setIsLoading(false);
  }

  return { handleVerification, isLoading, errors };
}

export default useVerificationHandler;
