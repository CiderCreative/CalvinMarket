import React from "react";
import Image from "next/image";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const CurrentConversationHeader = ({ activePerson }) => {
  return (
    <div className="relative flex w-full items-center justify-center space-x-5 border-b-[1px] border-opposite/10 py-8">
      {activePerson && (
        <Image
          src={activePerson?.image}
          alt={`Profile picture of ${activePerson.name}`}
          className="aspect-square w-10"
          draggable={false}
        />
      )}
      <h2 className="text-xl font-medium">Chat with {activePerson?.name}</h2>
    </div>
  );
};

export default CurrentConversationHeader;
