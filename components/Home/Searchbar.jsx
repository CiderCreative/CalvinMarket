import React, { useState, useRef } from "react";

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
  const searchIcon = (
    <svg
      className="w-4 bg-primary"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
  const placeholder = "Search";

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
        console.log("fetchedData", searchResults);
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
    <div className="flex w-[500px] items-center space-x-3 rounded-md border-[1.5px] border-dark border-opacity-50 px-5 py-2 dark:border-light">
      {searchIcon}
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
  );
};

function splitMatches(response, val) {
  console.log("split matches", response);
  const titleMatches = response.filter((item) => item.title.includes(val));
  const tagMatches = response.filter((item) => item.tags.includes(val));
  return { titleMatches, tagMatches };
}

export default Searchbar;
