import React from "react";
import ReactMarkdown from "react-markdown";

import { Content } from "@/db/schema";

import renderImage from "@/utils/renderImage";

type ArticleType = typeof Content.$inferSelect;

interface ArticleProps {
  articleDetails: ArticleType[]; // Expecting an array inside an object
}

function DisplayArticle({ articleDetails }: ArticleProps) {
  const { title, body, image, createTimestamp } = articleDetails[0];

  return (
    <div className="m-8 py-12 px-8 text-darkgrey dark:bg-darkblue dark:text-white rounded-2xl">
      <h2 className="font-bold text-xl text-center mb-5">{title}</h2>
      <p className="font-medium text-sm my-4 text-center">
        {new Date(createTimestamp).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
      <div>{renderImage(image)}</div>
      <div className="mt-8">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mb-4">{children}</p>,
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default DisplayArticle;
