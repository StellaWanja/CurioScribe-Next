"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Loader } from "lucide-react";

function ContentDisplay({
  content,
  imageData,
}: {
  content: string;
  imageData: string | null;
}) {
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <div className="mt-12">{displayImage()}</div>

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

      {/* have a dialog setting whether to save as article or story */}
      {(content || imageData) && (
        <button className="solid-button flex justify-center items-center font-bold py-2 px-6 gap-4 mt-6 w-full rounded-md">
          Save {loading && <Loader className="animate-spin" />}
        </button>
      )}
    </>
  );
}

export default ContentDisplay;
