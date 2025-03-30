"use client";

import React, { useState } from "react";
import { Loader } from "lucide-react";
import { useUser } from "@clerk/nextjs";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";

function UpdateForm({
  setDialogIsOpen,
  setUpdateTooltipVisible,
  setErrorTooltipVisible,
}: {
  setDialogIsOpen: (dialogIsOpen: boolean) => void;
  setUpdateTooltipVisible: (updateTooltipVisible: boolean) => void;
  setErrorTooltipVisible: (errorTooltipVisible: boolean) => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isLoaded, user, isSignedIn } = useUser();

  // check if user is loaded
  if (!isLoaded) {
    return <Spinner />;
  }

  // check if user is signed in
  if (!isSignedIn || !user) return;

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

    // Check if both first name and last name are empty
    if (!trimmedFirstName && !trimmedLastName) {
      setIsLoading(false);
      return;
    }

    // Create an object with the updated data
    const updatedData: Record<string, string> = {};
    if (trimmedFirstName) updatedData.firstName = trimmedFirstName;
    if (trimmedLastName) updatedData.lastName = trimmedLastName;

    try {
      // update user
      await user?.update(updatedData);
      //tooltip
      setUpdateTooltipVisible(true);
      setTimeout(() => setUpdateTooltipVisible(false), 3000);
    } catch (error) {
      console.error("Update failed:", error);
      //tooltip
      setErrorTooltipVisible(true);
      setTimeout(() => setErrorTooltipVisible(false), 3000);
    } finally {
      setIsLoading(false);
      setDialogIsOpen(false);
    }
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
