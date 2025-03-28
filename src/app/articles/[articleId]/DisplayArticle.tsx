"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { Content } from "@/db/schema";

import renderImage from "@/utils/renderImage";
import UpdateForm from "./UpdateForm";

type ArticleType = typeof Content.$inferSelect;

interface ArticleProps {
  articleDetails: ArticleType[]; // Expecting an array inside an object
}

function DisplayArticle({ articleDetails }: ArticleProps) {
  const { id, title, body, image, createTimestamp } = articleDetails[0];

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="m-8 py-12 px-8 text-darkgrey dark:bg-darkblue dark:text-white rounded-2xl">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-2xl text-center">
          {isEditing ? `Editing Article #${id}` : `Article #${id}`}
        </h1>
        {/* toggle between edit and read states */}
        <button
          className="solid-button flex justify-center items-center gap-2 font-bold py-2 px-6 rounded-md"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? "Cancel" : "Edit Article"}
        </button>
      </div>

      {/* divider */}
      <div className="border-t-2 border-black dark:border-white my-8 opacity-50" />

      {/* Reading article */}
      {!isEditing && (
        <>
          <h2 className="font-bold text-xl text-center mb-5">{title}</h2>
          <p className="font-medium text-sm my-4 text-center">
            {new Date(createTimestamp).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          <div className="m-auto">{renderImage(image)}</div>
          <div className="mt-8">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-4">{children}</p>,
              }}
            >
              {body}
            </ReactMarkdown>
          </div>
        </>
      )}

      {/* Editing article */}
      {isEditing && <UpdateForm title={title} body={body} />}
    </div>
  );
}

export default DisplayArticle;
