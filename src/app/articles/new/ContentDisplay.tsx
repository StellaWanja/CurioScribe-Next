"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

function ContentDisplay({
  content,
  imageData,
}: {
  content: string;
  imageData: string | null;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function displayImage() {
    if (imageData) {
      const imgSrc = `data:image/png;base64,${imageData}`;
      console.log(imgSrc);
      return (
        <Image
          src={imgSrc}
          alt="Generated Image"
          className="rounded-md "
          width={500}
          height={300}
          unoptimized
        />
      );
    }
    return null;
  }

  async function handleDBSaving() {
    setLoading(true);

    try {
      const response = await fetch("/api/save-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, imageData }),
      });

      if (!response.ok) {
        throw new Error("Failed to save content. Please try again later.");
      }

      const data = await response.json();
      router.push(`/articles/${data.id}`);
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
    <>
      <div className="mt-12">{displayImage()}</div>

      <p className="text-red-500 mt-4 text-center">{error}</p>

      {content && (
        <div className="w-full sm:w-3/4 mt-8 text-darkgrey dark:text-white">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-4">{children}</p>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      )}

      {(content || imageData) && (
        <button
          onClick={handleDBSaving}
          className="solid-button flex justify-center items-center font-bold py-2 px-6 gap-4 mt-6 rounded-md"
        >
          Save {loading && <Loader className="animate-spin" />}
        </button>
      )}
    </>
  );
}

export default ContentDisplay;
