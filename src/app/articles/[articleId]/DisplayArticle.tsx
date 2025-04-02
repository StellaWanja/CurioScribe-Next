"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { ArticleType } from "@/constants";

import renderImage from "@/utils/renderImage";
import formatTimestamp from "@/utils/formatTimestamp";
import Tooltip from "@/components/ui/Tooltip";
import UpdateForm from "./UpdateForm";
import ArticleMenu from "./ArticleMenu";

interface ArticleProps {
  articleDetails: ArticleType[]; // Expecting an array inside an object
  setArticleDetails: React.Dispatch<React.SetStateAction<ArticleType[]>>;
}

function DisplayArticle({ articleDetails, setArticleDetails }: ArticleProps) {
  // Destructure the article details
  const { id, title, body, image, createTimestamp, updateTimestamp } =
    articleDetails[0];

  const [isEditing, setIsEditing] = useState(false);
  const [updateTooltipVisible, setUpdateTooltipVisible] = useState(false);

  return (
    <div className="m-8 py-12 px-8 text-darkgrey dark:bg-darkblue dark:text-white rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <h1 className="font-bold text-2xl text-center">
          {isEditing ? `Editing Article #${id}` : `Article #${id}`}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
          <ArticleMenu setIsEditing={setIsEditing} isEditing={isEditing} />
        </div>
      </div>

      <div className="w-full absolute top-10 left-1/2 -translate-x-1/2">
        <Tooltip
          text="Article Updated successfully"
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
            {!updateTimestamp
              ? formatTimestamp(createTimestamp)
              : formatTimestamp(updateTimestamp)}
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
