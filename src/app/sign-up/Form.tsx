"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ClerkAPIError } from "@clerk/types";
import { Eye, EyeOff } from "lucide-react";

import Button from "@/components/ui/Button";

type FormProps = {
  errors: ClerkAPIError[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  emailAddress: string;
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

function Form({
  errors,
  handleSubmit,
  emailAddress,
  setEmailAddress,
  password,
  setPassword,
}: FormProps) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="p-6 pt-0">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
            placeholder="Email"
            required
            className="input rounded-md p-2"
          />
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="password" className="text-lg">
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
              className="w-full input rounded-md p-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {errors && errors.length > 0 && (
          <p className="text-red-500 mt-4 text-center">
            Error: {errors[0]?.message}
          </p>
        )}

        <Button type="submit" className="solid-button mt-4 w-full rounded-md">
          Sign Up
        </Button>
      </form>

      <p className="text-sm text-center pt-4 text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-primary hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default Form;
