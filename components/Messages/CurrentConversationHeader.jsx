import React from "react";
import Image from "next/image";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const CurrentConversationHeader = ({ activePerson }) => {
  return (
    <div className="relative flex items-center justify-center w-full py-8 space-x-5 border-b-[1px] border-opposite/10">
      {activePerson && (
        <Image
          src={activePerson?.image}
          alt={`Profile picture of ${activePerson.name}`}
          className="aspect-square w-10"
          draggable={false}
        />
      )}
      <h2 className="text-xl font-medium">Chat with {activePerson?.name}</h2>

      <div className="absolute right-10 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 border-[1px] border-transparent hover:border-opposite/20 hover:cursor-pointer p-2">
        <EllipsisVerticalIcon className="aspect-square h-6 " />
      </div>
    </div>
  );
};

export default CurrentConversationHeader;
