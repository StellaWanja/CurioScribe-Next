"use client";

import React, { useState } from "react";
import { Loader } from "lucide-react";
import { ClerkAPIError } from "@clerk/types";

function Verification({
  isLoading,
  errors,
}: {
  isLoading: boolean;
  errors: ClerkAPIError[];
}) {
  const [code, setCode] = useState("");

  return (
    <div className="p-6 pt-0">
      <form>
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

        <button
          type="submit"
          className="solid-button p-2 mt-4 w-full rounded-md"
        >
          Verify Email {isLoading && <Loader className="animate-spin" />}
        </button>
      </form>
    </div>
  );
}

export default Verification;
