import React, { useEffect } from "react";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { SunIcon, MoonIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const Settings = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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
          className="size-6 cursor-pointer stroke-[1.2px] text-subtle hover:opacity-70"
          onClick={() => setSettingsOpen(!settingsOpen)}
        />
      </div>

      {/* Setting Dropdown Menu */}
      <div
        className={`absolute right-20 top-10 flex items-center space-x-10 rounded-xl border-[1px] border-dark bg-light p-5 shadow-md backdrop-blur-md dark:border-light dark:bg-dark ${
          settingsOpen ? "visible" : "hidden"
        }`}
      >
        {/* Light Mode / Dark Mode Toggle */}
        {resolvedTheme === "dark" ? (
          <MoonIcon
            className="size-6 cursor-pointer text-subtle duration-75 ease-in-out hover:opacity-70"
            onClick={toggleTheme}
          />
        ) : (
          <SunIcon
            className="size-6 cursor-pointer text-subtle duration-75 ease-in-out hover:opacity-70"
            onClick={toggleTheme}
          />
        )}
        <button
          className="inline-block rounded-md bg-maroon px-5 py-2 text-light transition-transform duration-100 hover:scale-[102%] hover:cursor-pointer"
          onClick={() => signOut()}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Settings;
