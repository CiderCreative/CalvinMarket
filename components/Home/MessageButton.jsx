import React from "react";
import Link from "next/link";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const MessageButton = () => {
  return (
    <Link href="/Messages">
      <ChatBubbleLeftRightIcon className="size-6 text-subtle duration-75 ease-in-out hover:opacity-70" />
    </Link>
  );
};

export default MessageButton;
