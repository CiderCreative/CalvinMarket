"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HighlightContainer, Searchbar } from "../../components/Home";
import { ExitButton } from "../../components/Global";

const Page = () => {
  const [searchResults, setSearchResults] = useState({
    titleMatches: [],
    tagMatches: [],
    profileMatches: [],
  });

  useEffect(() => {
    const storedResults = sessionStorage.getItem("searchResults");
    if (storedResults) {
      const parsedResults = JSON.parse(storedResults); // Parse the stored JSON string
      setSearchResults(parsedResults); // Set the search results in state
    }
  }, []);

  return (
    <div className="px-2 py-5">
      <ExitButton />
      <div className="flex justify-center">
        <Searchbar />
      </div>

      {searchResults.titleMatches.length > 0 && (
        <HighlightContainer
          text="Title Matches"
          data={searchResults.titleMatches}
        />
      )}

      {searchResults.tagMatches.length > 0 && (
        <HighlightContainer
          text="Tag Matches"
          data={searchResults.tagMatches}
        />
      )}

      {searchResults.profileMatches.length > 0 && (
        <div className="m-auto max-w-[1500px] px-2 py-10 sm:px-10">
          <h3 className="mb-8 text-lg font-bold text-subtle md:text-xl xl:text-2xl">
            Profile Matches
          </h3>

          <div className="space-x-2">
            {searchResults.profileMatches.map((item, index) => (
              <Link
                key={index}
                href="/"
                className="rounded-md border-[1px] border-dark/20 px-12 py-4 transition-colors duration-75 hover:bg-neutral-200 dark:border-light/20 dark:hover:bg-neutral-800"
              >
                {item.email}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
