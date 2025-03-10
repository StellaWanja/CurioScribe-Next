"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ClerkAPIError } from "@clerk/types";
import { Eye, EyeOff, Loader } from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type FormProps = {
  errors: ClerkAPIError[];
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    firstName: string,
    lastName: string,
    emailAddress: string,
    password: string
  ) => void;
  isLoading: boolean;
};

function Form({ errors, handleSubmit, isLoading }: FormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-6 pt-0">
      <form
        onSubmit={(e) =>
          handleSubmit(e, firstName, lastName, emailAddress, password)
        }
      >
        <Input
          type="text"
          id="firstName"
          label="First Name"
          value={firstName}
          onChangeFn={(event) => setFirstName(event.target.value)}
          required
        />

        <Input
          type="text"
          id="lastName"
          label="Last Name"
          value={lastName}
          onChangeFn={(event) => setLastName(event.target.value)}
          required
        />

        <Input
          type="email"
          id="emailAddress"
          label="Email"
          value={emailAddress}
          onChangeFn={(event) => setEmailAddress(event.target.value)}
          required
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg text-darkgrey dark:text-white">
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full input rounded-md p-2 dark:bg-white dark:border-2 dark:border-black text-darkgrey"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <Eye className="h-4 w-4 text-darkgrey" />
              ) : (
                <EyeOff className="h-4 w-4 text-darkgrey" />
              )}
            </button>
          </div>
        </div>

        {errors && errors.length > 0 && (
          <p className="text-red-500 mt-4 text-center">
            Error: {errors[0]?.message}
          </p>
        )}

        <Button
          type="submit"
          className="solid-button flex justify-center items-center gap-4 mt-4 w-full rounded-md"
        >
          Sign Up {isLoading && <Loader className="animate-spin" />}
        </Button>
      </form>

      <p className="text-sm text-center pt-4 text-muted-foreground text-darkgrey dark:text-white">
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
