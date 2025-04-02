"use client";

import React, { useState, useEffect } from "react";

import ArticleCard from "./ArticleCard";
import Spinner from "@/components/ui/Spinner";

function AllArticles() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);

      try {
        const response = await fetch("/api/articles/fetch-all");

        if (!response.ok) {
          throw new Error("Failed to fetch content. Please try again later.");
        }

        const data = await response.json();
        setArticles(data.dbResults);
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

    fetchArticles();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="py-8 px-5">
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {articles.length > 0 && <ArticleCard cardDetails={articles} />}

      {articles.length === 0 && (
        <p className="text-center text-darkgrey dark:text-white mt-4">
          No articles found.
        </p>
      )}
    </div>
  );
}

export default AllArticles;
