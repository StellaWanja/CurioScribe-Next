"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { ArticleType } from "@/constants";

import renderImage from "@/utils/renderImage";
import UpdateForm from "./UpdateForm";
import Tooltip from "@/components/ui/Tooltip";

interface ArticleProps {
  articleDetails: ArticleType[]; // Expecting an array inside an object
  setArticleDetails: React.Dispatch<React.SetStateAction<ArticleType[]>>
}

function DisplayArticle({ articleDetails, setArticleDetails } :  ArticleProps) {
  const { id, title, body, image, createTimestamp } = articleDetails[0];

  const [isEditing, setIsEditing] = useState(false);
  const [updateTooltipVisible, setUpdateTooltipVisible] = useState(false);

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

      <div className="w-full absolute top-10 left-1/2 -translate-x-1/2">
        <Tooltip
          text="Profile Updated successfully"
          visible={updateTooltipVisible}
          trigger="manual"
          className="bg-green-700 text-white"
        />
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
      {isEditing && (
        <UpdateForm
          title={title}
          body={body}
          setIsEditing={setIsEditing}
          setUpdateTooltipVisible={setUpdateTooltipVisible}
          setArticleDetails={setArticleDetails}
        />
      )}
    </div>
  );
}

export default DisplayArticle;
