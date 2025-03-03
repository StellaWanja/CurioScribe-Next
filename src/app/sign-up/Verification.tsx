"use client";

import React, { useState } from "react";
import { Loader } from "lucide-react";
import { ClerkAPIError } from "@clerk/types";

import Button from "@/components/ui/Button";

type VerificationProps = {
  isLoading: boolean;
  errors: ClerkAPIError[] | undefined;
  handleVerification: (
    event: React.FormEvent<HTMLFormElement>,
    code: string
  ) => void;
};

function Verification({
  isLoading,
  errors,
  handleVerification,
}: VerificationProps) {
  const [code, setCode] = useState("");

  return (
    <div className="p-6 pt-0">
      <form onSubmit={(e) => handleVerification(e, code)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="code" className="text-lg">
            Verification Code:
          </label>
          <input
            type="code"
            id="code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter verification code"
            required
            className="input rounded-md p-2"
          />
        </div>

        {errors && errors.length > 0 && (
          <p className="text-red-500 mt-4 text-center">
            Error: {errors[0]?.message}
          </p>
        )}

        <Button
          type="submit"
          className="solid-button flex justify-center items-center gap-4  p-2 mt-4 w-full rounded-md"
        >
          Verify Email {isLoading && <Loader className="animate-spin" />}
        </Button>
      </form>
    </div>
  );
}

export default Verification;
