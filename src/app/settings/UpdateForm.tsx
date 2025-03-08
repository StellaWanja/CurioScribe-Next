"use client";

import React, { useState } from "react";
import { Loader } from "lucide-react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

function UpdateForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form className="">
      <Input
        type="text"
        id="firstName"
        label="First Name"
        value={firstName}
        onChangeFn={(event) => setFirstName(event.target.value)}
      />

      <Input
        type="text"
        id="lastName"
        label="Last Name"
        value={lastName}
        onChangeFn={(event) => setLastName(event.target.value)}
      />

      <Button
        type="submit"
        className="solid-button flex justify-center items-center gap-4 mt-4 w-full rounded-md"
      >
        Sign up
        {/* Sign Up {isLoading && <Loader className="animate-spin" />} */}
      </Button>
    </form>
  );
}

export default UpdateForm;
