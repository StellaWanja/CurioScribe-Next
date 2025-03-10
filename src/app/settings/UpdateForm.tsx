"use client";

import React, { useState } from "react";
import { Loader } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";

function UpdateForm({
  setDialogIsOpen,
}: {
  setDialogIsOpen: (dialogIsOpen: boolean) => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isLoaded, user, isSignedIn } = useUser();
  const router = useRouter();

  if (!isLoaded) {
    return <Spinner />;
  }

  if (!isSignedIn || !user) {
    router.push("/sign-in");
  }

  async function updateUser(
    e: React.FormEvent<HTMLFormElement>,
    firstName?: string,
    lastName?: string
  ) {
    e.preventDefault();
    setIsLoading(true);

    // Trim inputs to remove unnecessary spaces
    const trimmedFirstName = firstName?.trim();
    const trimmedLastName = lastName?.trim();

    if (!trimmedFirstName && !trimmedLastName) {
      setIsLoading(false);
      setDialogIsOpen(false);
      return;
    }

    const updatedData: Record<string, string> = {};
    if (trimmedFirstName) updatedData.firstName = trimmedFirstName;
    if (trimmedLastName) updatedData.lastName = trimmedLastName;

    await user?.update(updatedData);

    setIsLoading(false);
    setDialogIsOpen(false);
  }

  return (
    <form onSubmit={(e) => updateUser(e, firstName, lastName)}>
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
        Update {isLoading && <Loader className="animate-spin" />}
      </Button>
    </form>
  );
}

export default UpdateForm;
