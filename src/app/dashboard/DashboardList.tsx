"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import Spinner from "@/components/ui/Spinner";

function DashboardList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {articles.length === 0 && (
        <div className="w-full bg-dashboardblue dark:bg-darkblue rounded-md p-4 mt-4">
          <p className="text-center">No articles found!</p>
        </div>
      )}

      {articles.map(({ id, title }) => (
        <Link key={id} href={`/articles/${id}`} className="text-white">
          <div className="w-full bg-dashboardblue dark:bg-darkblue rounded-md p-4 mt-4">
            <span>{title}</span>
          </div>
        </Link>
      ))}
    </>
  );
}

export default DashboardList;
