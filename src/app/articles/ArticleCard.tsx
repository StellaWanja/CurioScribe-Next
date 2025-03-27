import React from "react";
import Link from "next/link";

import { Content } from "@/db/schema";

import renderImage from "@/utils/renderImage";

type ArticleType = typeof Content.$inferSelect;

interface ArticleCardProps {
  cardDetails: ArticleType[]; // Expecting an array inside an object
}

function ArticleCard({ cardDetails }: ArticleCardProps) {
  if (!cardDetails) return;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardDetails.map(({ id, title, createTimestamp, image }) => (
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
            {new Date(createTimestamp).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default ArticleCard;
