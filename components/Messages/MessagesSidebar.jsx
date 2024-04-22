import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import AdvancedImage from "../AdvancedImage";

const MessagesSidebar = ({
  activePerson,
  setActivePerson,
  peopleList,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const Router = useRouter(); //Router objec

  return (
    <div
      className={`fixed left-0 top-0 h-screen py-5 text-primary shadow-xl transition-all duration-200 ${sidebarOpen ? "w-[300px]" : "w-[100px]"}`}
    >
      {/* Button menu -- top  */}
      <div className="mb-10 flex justify-between px-5">
        <XMarkIcon
          onClick={() => Router.back()}
          className="aspect-square h-8 hover:cursor-pointer"
        />
        <ChevronLeftIcon
          className={`aspect-square h-8 transition-transform duration-200 hover:cursor-pointer ${sidebarOpen ? "rotate-0" : "rotate-180"}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      <div className="w-full space-y-2 px-5">
        {/* Each person's preview  */}
        {peopleList.map((person, idx) => (
          <div
            key={idx}
            className="flex w-full items-center space-x-8 rounded-xl border-[1px] border-transparent px-5 py-4 hover:cursor-pointer hover:border-opposite/20 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            onClick={() => setActivePerson(person)}
          >
            <AdvancedImage
              src={person.image}
              alt={`Profile picture of ${person.name}`}
              className="aspect-square h-6 w-6"
              draggable={false}
            />
            {sidebarOpen && (
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg">
                {person.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesSidebar;
