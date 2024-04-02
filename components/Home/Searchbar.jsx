import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [enterPressed, setEnterPressed] = useState(false); //Hold if enter key was pressed
  const [isLoading, setIsLoading] = useState(false); //Hold if data is being fetched
  const [search, setSearch] = useState(""); //Hold query
  const fetchedData = useRef({
    titleMatches: [],
    tagMatches: [],
    profileMatches: [],
  }); //stores items that have been fetched from the db
  const [searchResults, setSearchResults] = useState({
    titleMatches: [],
    tagMatches: [],
    profileMatches: [],
    isSet: false,
  }); //stores items that match the search query
  const placeholder = "Search";

  useEffect(() => {
    if (searchResults.isSet && enterPressed) {
      const resultsString = JSON.stringify(searchResults);
      sessionStorage.setItem("searchResults", resultsString);
      if (
        searchResults.titleMatches.length === 0 &&
        searchResults.tagMatches.length === 0 &&
        searchResults.profileMatches.length === 0
      ) {
        return;
      } else if (pathname !== "/Search") {
        // If not on the "/Search" page, navigate to it
        router.push("/Search");
      } else {
        // If already on the "/Search" page, reload it
        window.location.reload();
      }
      setEnterPressed(false);
    }
  }, [searchResults, enterPressed]);

  // Listen for enter key
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setEnterPressed(true);
    }
  };

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
        setIsLoading(true);
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
        setIsLoading(false)

        const profileMatches = profileResponse;
        const { titleMatches, tagMatches } = splitMatches(titleTagResponse, newVal);

        //update stored data
        setSearchResults({ titleMatches, tagMatches, profileMatches, isSet: true, });
        fetchedData.current = { titleMatches, tagMatches, profileMatches };

      } else {
        //search through fetched data
        const newTitleMatches = searchResults.titleMatches.filter((item) => item.title.includes(newVal));
        const newTagMatches = searchResults.tagMatches.filter((item) =>item.tags.includes(newVal));
        const newProfileMatches = searchResults.profileMatches.filter((item) =>item.email.includes(newVal),);

        setSearchResults({profileMatches: newProfileMatches,titleMatches: newTitleMatches,tagMatches: newTagMatches, isSet: true });
      }
    } else {
      //if the user is deleting from the search query
      if (event.target.value.length === 0) {
        setSearchResults({
          titleMatches: [],
          tagMatches: [],
          profileMatches: [],
          isSet: true
        });
      } else {
        //search through fetched data
        const newTitleMatches = fetchedData.current.titleMatches.filter((item) =>item.title.includes(newVal),);
        const newTagMatches = fetchedData.current.tagMatches.filter((item) =>item.tags.includes(newVal),);
        const newProfileMatches = fetchedData.current.profileMatches.filter((item) =>item.email.includes(newVal),);
        setSearchResults({profileMatches: newProfileMatches,titleMatches: newTitleMatches,tagMatches: newTagMatches, isSet: true});
      }
    }
  }

  return (
    <div className="relative w-[500px]" onKeyDown={handleEnter}>
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
        className={`absolute top-12 w-[500px] space-y-2 rounded-md border-dark/20 bg-primary shadow-sm dark:border-light/20 ${searchResults.titleMatches.length > 0 ? "border-[1px]" : ""}`}
      >
        {searchResults.titleMatches.map((item, index) => (
          <Link
            key={index}
            href={`/Item/${item.itemId}`}
            className="block w-full rounded-md px-5 py-2 text-subtle transition-colors duration-75 ease-in-out hover:bg-yellow dark:hover:bg-maroon"
          >
            {item.title}
          </Link>
        ))}
        {isLoading ? (
          <div className="block w-full rounded-md px-5 py-2 text-subtle transition-colors duration-75 ease-in-out hover:bg-yellow dark:hover:bg-maroon">
            <div className="flex items-center justify-center">
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin text-subtle"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </div>
          </div>
        ) : null}
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
