"use client";

import React, { useState, useRef, useEffect } from "react";
import { Loader } from "lucide-react";

import Button from "@/components/ui/Button";

function UpdateForm({ title, body }: { title: string; body: string }) {
  const [inputTitle, setInputTitle] = useState(title || "");
  const [inputBody, setInputBody] = useState(body || "");
  const [loading, setLoading] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // set textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // set new height
    }
  }, [inputBody]);

  return (
    <form className="text-dark-grey dark:text-white">
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
