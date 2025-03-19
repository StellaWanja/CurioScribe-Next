"use client";

import React, { useState } from "react";
import { NotebookText, Loader } from "lucide-react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import ContentDisplay from "./ContentDisplay";

function NewArticle() {
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState("");
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setContent("");
    setImageData(null);
    setError("");

    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate content. Please try again later.");
      }

      const data = await response.json();

      // If API includes an image, store it with a placeholder key
      if (data.image) {
        setImageData(data.image.data);
        setContent(data.response);
      } else {
        // just show text
        setContent(data.response);
        setImageData(null);
      }
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

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen px-4">
      <form onSubmit={handleSubmit} className="w-full sm:w-3/4">
        <div className="flex flex-col items-center  space-y-1.5 p-6 text-darkgrey dark:text-white">
          <NotebookText className="stroke-[2.5] w-8 h-8" />
          <h2 className="mt-4 text-xl font-semibold tracking-tight text-center">
            What would you like to write about?
          </h2>
          <p className="text-center text-lightgrey text-sm">
            Tip: Be as descriptive as possible. Images can be added as well!
          </p>
          <span className="text-center text-lightgrey text-sm">
            e.g. write an article about the history of computers and include
            images.
          </span>
        </div>
        <Input
          type="text"
          id="prompt"
          label="Create prompt"
          value={prompt}
          onChangeFn={(event) => setPrompt(event.target.value)}
          required
        />
        <Button
          type="submit"
          className="solid-button flex justify-center items-center gap-4 mt-4 w-full rounded-md"
        >
          Generate {loading && <Loader className="animate-spin" />}
        </Button>
      </form>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      <ContentDisplay content={content} imageData={imageData} />
    </div>
  );
}

export default NewArticle;
