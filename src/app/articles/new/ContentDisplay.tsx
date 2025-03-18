import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

function ContentDisplay({
  content,
  imageData,
}: {
  content: string;
  imageData: string | null;
}) {
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
        <div className="w-full sm:w-3/4 my-8 text-darkgrey dark:text-white">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-4">{children}</p>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      )}
    </>
  );
}

export default ContentDisplay;
