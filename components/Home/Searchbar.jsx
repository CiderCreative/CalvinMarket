import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const fetchedData = useRef({
    titleMatches: [],
    tagMatches: [],
    profileMatches: [],
  }); //stores items that have been fetched from the db
  const [searchResults, setSearchResults] = useState({
    titleMatches: [],
    tagMatches: [],
    profileMatches: [],
  }); //stores items that match the search query
  const placeholder = "Search";

  // useEffect(() => console.log(searchResults), [searchResults]);
  async function handleChange(event) {
    let newVal = event.target.value;
    const wasDelete = newVal.length < search.length;
    setSearch(event.target.value);

    //if user is adding to the search query
    //prettier-ignore
    if (!wasDelete) {
      if (event.target.value.length === 1) {
        // Don't search anything yet
      } else if (event.target.value.length === 2) {

        //search for matches in the db for title and tags
        const titleTagResponse = await fetch("api/items/scanTitleorTag", {
          method: "POST",
          body: JSON.stringify({ val: newVal }),
        }).then((res) => res.json()).then((res) => res.results);

        //search for matches in the db for profile
        const profileResponse = await fetch("api/profile/scan", {
          method: "POST",
          body: JSON.stringify({ val: newVal }),
        }).then((res) => res.json()).then((res) => res.results);

        const profileMatches = profileResponse;
        const { titleMatches, tagMatches } = splitMatches(titleTagResponse, newVal);

        //update stored data
        setSearchResults({ titleMatches, tagMatches, profileMatches });
        fetchedData.current = { titleMatches, tagMatches, profileMatches };

      } else {
        // console.log("fetchedData", searchResults);
        //search through fetched data
        const newTitleMatches = searchResults.titleMatches.filter((item) => item.title.includes(newVal));
        const newTagMatches = searchResults.tagMatches.filter((item) =>item.tags.includes(newVal));
        const newProfileMatches = searchResults.profileMatches.filter((item) =>item.email.includes(newVal),);

        setSearchResults({profileMatches: newProfileMatches,titleMatches: newTitleMatches,tagMatches: newTagMatches });
      }
    } else {
      //if the user is deleting from the search query
      if (event.target.value.length === 0) {
        setSearchResults({
          titleMatches: [],
          tagMatches: [],
          profileMatches: [],
        });
      } else {
        //search through fetched data
        const newTitleMatches = fetchedData.current.titleMatches.filter((item) =>item.title.includes(newVal),);
        const newTagMatches = fetchedData.current.tagMatches.filter((item) =>item.tags.includes(newVal),);
        const newProfileMatches = fetchedData.current.profileMatches.filter((item) =>item.email.includes(newVal),);
        setSearchResults({profileMatches: newProfileMatches,titleMatches: newTitleMatches,tagMatches: newTagMatches,});
      }
    }
  }

  return (
    <div className="relative w-[500px]">
      {/* Searchbar */}
      <div className="z-20 flex w-full items-center space-x-3 rounded-md border-[1.5px] border-dark/30 border-opacity-50 px-5 py-2 dark:border-light/30">
        <MagnifyingGlassIcon className="size-4 text-subtle" />
        <input
          type="text"
          autoComplete="off"
          id="name"
          placeholder={placeholder}
          className="w-full border-transparent bg-transparent focus:shadow-none focus:outline-none"
          value={search}
          onChange={handleChange}
        />
      </div>

      {/* Search Results Drop Down */}
      <div
        className={`absolute top-12 w-[500px] space-y-2 rounded-md border-dark/20 bg-primary shadow-sm ${searchResults.titleMatches.length > 0 ? "border-[1px]" : ""}`}
      >
        {searchResults.titleMatches.map((item, index) => (
          <Link
            key={index}
            href={`/Item/${item.itemId}`}
            className="block w-full rounded-md px-5 py-2 transition-colors duration-75 ease-in-out hover:bg-yellow"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

function splitMatches(response, val) {
  // console.log("split matches", response);
  const titleMatches = response.filter((item) => item.title.includes(val));
  const tagMatches = response.filter((item) => item.tags.includes(val));
  return { titleMatches, tagMatches };
}

export default Searchbar;
