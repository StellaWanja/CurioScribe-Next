"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Loader } from "lucide-react";

function DeleteAccount() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDeleteAccount() {
    setLoading(true);

    try {
      const response = await fetch("/api/users", {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete account");
      }

      //   show tooltip
      router.push("/");
    } catch (error) {
      console.error("Error deleting account:", error);
      // tooltip
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDeleteAccount}
      disabled={loading}
      className="solid-button flex justify-center items-center gap-2 font-bold py-2 px-6  w-full rounded-md"
      aria-label="Delete Account"
    >
      Delete Account {loading && <Loader className="animate-spin" />}
    </button>
  );
}

export default DeleteAccount;
