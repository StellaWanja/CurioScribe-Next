"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Spinner from "@/components/ui/Spinner";
import DisplayArticle from "./DisplayArticle";

import { ArticleType } from "@/constants";

function Article() {
  const { articleId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [articleDetails, setArticleDetails] = useState<ArticleType[]>([]);

  useEffect(() => {
    async function fetchArticleDetails() {
      setLoading(true);

      try {
        const response = await fetch(`/api/articles/${articleId}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to get content. Please try again later.");
        }

        const data = await response.json();
        setArticleDetails(data.result);
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

    fetchArticleDetails();
  }, [articleId]);

  if (loading) return <Spinner />;

  return (
    <div>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {articleDetails.length > 0 && (
        <DisplayArticle
          articleDetails={articleDetails}
          setArticleDetails={setArticleDetails}
        />
      )}
    </div>
  );
}

export default Article;
