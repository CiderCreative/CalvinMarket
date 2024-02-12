import React from "react";
import Link from "next/link";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

const MessageButton = ({ messageRecipient }) => {
  return (
    <Link
      href={`/Messages?user=${messageRecipient}`}
      className="flex items-center space-x-4 rounded-lg bg-yellow px-8 py-3 shadow-sm transition-opacity duration-100 hover:cursor-pointer hover:opacity-70 dark:bg-neutral-700"
    >
      <ChatBubbleLeftEllipsisIcon className="size-5 text-dark" />
      <p>Message Seller</p>
    </Link>
  );
};

export default MessageButton;
