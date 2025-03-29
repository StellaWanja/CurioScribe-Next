"use client";

import React, { useState, useRef, useEffect } from "react";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";

import { ArticleType } from "@/constants";

import Button from "@/components/ui/Button";

type UpdateFornProps = {
  title: string;
  body: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateTooltipVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setArticleDetails: React.Dispatch<React.SetStateAction<ArticleType[]>>;
};

function UpdateForm({
  title,
  body,
  setIsEditing,
  setUpdateTooltipVisible,
  setArticleDetails,
}: UpdateFornProps) {
  const { articleId } = useParams();

  const [inputTitle, setInputTitle] = useState(title || "");
  const [inputBody, setInputBody] = useState(body || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    // Trim inputs to remove unnecessary spaces
    const trimmedTitle = inputTitle?.trim();
    const trimmedBody = inputBody?.trim();

    // Check if both title and body are empty
    if (!trimmedTitle || !trimmedBody) {
      setLoading(false);
      return;
    }

    // Create an object with the updated data
    const updatedData: Record<string, string> = {};
    if (trimmedTitle) updatedData.title = trimmedTitle;
    if (trimmedBody) updatedData.body = trimmedBody;

    // Send the updated data to the server
    try {
      const response = await fetch(`/api/articles/${articleId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update content. Please try again later.");
      }

      // Fetch the updated article
      const updatedArticleResponse = await fetch(`/api/articles/${articleId}`, {
        method: "GET",
      });
      const updatedArticle = await updatedArticleResponse.json();

      setArticleDetails(updatedArticle.result);

      //tooltip
      setUpdateTooltipVisible(true);
      setTimeout(() => setUpdateTooltipVisible(false), 3000);

      setIsEditing(false);
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  // set textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // set new height
    }
  }, [inputBody]);

  return (
    <form onSubmit={handleSubmit} className="text-dark-grey dark:text-white">
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      <div className="flex flex-col gap-2 mb-4">
        <label className="font-semibold text-lg">Edit Title:</label>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          className="input w-full rounded-md p-2 dark:border-2 dark:border-black"
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="font-semibold text-lg">Edit Content:</label>
        <textarea
          ref={textareaRef}
          value={inputBody}
          onChange={(e) => setInputBody(e.target.value)}
          className="input w-full field-sizing-content rounded-md p-2 dark:border-2 dark:border-black"
        />
      </div>
      <Button
        type="submit"
        className="solid-button flex justify-center items-center m-auto gap-4 mt-4 rounded-md"
      >
        Update {loading && <Loader className="animate-spin" />}
      </Button>
    </form>
  );
}

export default UpdateForm;
