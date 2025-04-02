"use client";

import React, { useState } from "react";
import { Loader } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

function DeleteArticle() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { articleId } = useParams();

  async function handleDeleteArticle() {
    setLoading(true);

    try {
      const response = await fetch(`/api/articles/${articleId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete article. Please try again later.");
      }

      router.push("/articles");
    } catch (error) {
      console.error("Error deleting article:", error);
      throw new Error("Failed to delete article", { cause: error });
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDeleteArticle}
      disabled={loading}
      className="solid-button flex justify-center items-center gap-2 font-bold py-2 px-6  w-full rounded-md"
      aria-label="Delete Account"
    >
      Delete Article {loading && <Loader className="animate-spin" />}
    </button>
  );
}

export default DeleteArticle;
