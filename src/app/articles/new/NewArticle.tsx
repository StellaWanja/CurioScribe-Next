"use client";

import React, { useState } from "react";
import { NotebookText, Loader } from "lucide-react";
import Form from "next/form";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { createArticle } from "@/app/actions";

function NewArticle() {
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    console.log(prompt);
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
      console.log(data.response);
      setContent(
        data.response || "Error generating content. Please try again later."
      );
    } catch (error) {
      console.error("Error:", error);
      setContent("Error generating content. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden  bg-white dark:bg-dashboardblue">
      <Form onSubmit={handleSubmit} action={createArticle} className="w-3/4">
        <div className="flex flex-col items-center  space-y-1.5 p-6 text-darkgrey dark:text-white">
          <NotebookText className="stroke-[2.5] w-8 h-8" />
          <h2 className="mt-4 text-xl font-semibold tracking-tight text-center">
            What would you like to write about?
          </h2>
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
      </Form>

      {content && (
        <div className="flex flex-col items-center space-y-1.5 p-6 text-darkgrey dark:text-white">
          <p className="mt-4 text-md font-semibold tracking-tight text-center">
            {content}
          </p>
        </div>
      )}
    </div>
  );
}

export default NewArticle;
