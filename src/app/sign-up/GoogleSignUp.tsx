import React from "react";
import { Loader } from "lucide-react";
import { ClerkAPIError } from "@clerk/types";

type GoogleSignUpProps = {
  handleGoogleSignUp: () => void;
  isLoading: boolean;
  errors: ClerkAPIError[];
};
function GoogleSignUp({
  handleGoogleSignUp,
  isLoading,
  errors,
}: GoogleSignUpProps) {
  return (
    <div className="flex items-center justify-center p-6 pt-0">
      <div className="rounded-xl bg-darkblue p-5 w-full">
        <p className="mb-4 text-center text-sm text-white">
          Alternatively, sign up with these platforms
        </p>
        <button
          className="w-full bg-white hover:bg-lightgrey dark:text-darkgrey transition delay-100 ease-in p-2 rounded-md font-bold flex justify-center items-center gap-2 "
          type="button"
          onClick={handleGoogleSignUp}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
            aria-hidden
            className="size-4"
          >
            <g clipPath="url(#a)">
              <path
                fill="currentColor"
                d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
          Sign up with Google {isLoading && <Loader className="animate-spin" />}
        </button>

        {errors && errors.length > 0 && (
          <p className="text-red-500 mt-4 text-center">
            Error: {errors[0]?.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default GoogleSignUp;
