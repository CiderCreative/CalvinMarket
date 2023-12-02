import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Context } from "../../app/Context";
import { signOut } from "next-auth/react";
import { SunIcon, MoonIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";

const Settings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { darkMode, toggleDark } = useContext(Context);

  useEffect(() => {
    const clickAway = (event) => {
      if (settingsOpen && !event.target.closest(".click-away"))
        setSettingsOpen(false);
    };
    document.addEventListener("mousedown", clickAway);
    return () => {
      document.removeEventListener("mousedown", clickAway);
    };
  }, [settingsOpen]);

  return (
    <div className="click-away">
      <div
        onClick={() => {
          setSettingsOpen(!settingsOpen);
        }}
      >
        <Cog8ToothIcon
          className="w-6 h-8"
          onClick={() => setSettingsOpen(!settingsOpen)}
        />
      </div>
      <div
        className={`absolute space-y-5 p-5 top-10 right-20 border-2 bg-primary border-opposite rounded-xl ${
          settingsOpen ? "visible" : "hidden"
        }`}
      >
        {/* Light Mode / Dark Mode Toggle */}
        {darkMode ? (
          <svg
            onClick={toggleDark}
            className="w-6 h-6 text-primary hover:cursor-pointer hover:scale-105"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
            />
          </svg>
        ) : (
          <svg
            onClick={toggleDark}
            className="w-6 h-6 text-primary hover:cursor-pointer hover:scale-105"
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
              d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            />
          </svg>
        )}
        <button
          className="inline-block bg-maroon text-light px-5 py-2 rounded-md hover:cursor-pointer hover:scale-[102%] transition-transform duration-100"
          onClick={() => signOut()}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Settings;
