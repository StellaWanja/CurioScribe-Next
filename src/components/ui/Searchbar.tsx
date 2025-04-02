"use client";

import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";

function Searchbar({
  setSearchQuery,
}: {
  setSearchQuery: (query: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  useEffect(() => {
    setSearchQuery(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchQuery]);

  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={20}
      />
      <input
        type="text"
        placeholder="Search your project"
        className="w-full pl-10 pr-4 py-2 input rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
