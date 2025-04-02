import React from "react";
import Link from "next/link";

import { ArticleType } from "@/constants";

import renderImage from "@/utils/renderImage";
import formatTimestamp from "@/utils/formatTimestamp";

interface ArticleCardProps {
  cardDetails: ArticleType[]; // Expecting an array inside an object
}

function ArticleCard({ cardDetails }: ArticleCardProps) {
  if (!cardDetails) return;

  const sortedArticles = [...cardDetails].sort(
    (a, b) =>
      new Date(b.createTimestamp).getTime() -
      new Date(a.createTimestamp).getTime()
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedArticles.map(
        ({ id, title, createTimestamp, image, updateTimestamp }) => (
          <Link
            key={id}
            href={`/articles/${id}`}
            className="font-sans w-full bg-dashboardblue dark:bg-darkblue text-white rounded-2xl p-8 flex flex-col items-center justify-center"
          >
            {renderImage(image)}
            <div>
              <h2 className="mt-4 font-bold text-center">{title}</h2>
            </div>
            <span className="font-medium text-sm mt-4">
              {!updateTimestamp
                ? formatTimestamp(createTimestamp)
                : formatTimestamp(updateTimestamp)}
            </span>
          </Link>
        )
      )}
    </div>
  );
}

export default ArticleCard;
