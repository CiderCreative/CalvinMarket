import {
  PencilIcon,
  BookOpenIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
  UserIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export const filterButtonInfo = [
  {
    text: "School",
    icon: <PencilIcon className="size-4 lg:size-[18px]" />,
  },
  {
    text: "Books",
    icon: <BookOpenIcon className="size-4 lg:size-[18px]" />,
  },
  {
    text: "Furniture",
    icon: <HomeIcon className="size-4 lg:size-[18px]" />,
  },
  {
    text: "Electronics",
    icon: <DevicePhoneMobileIcon className="size-4 lg:size-[18px]" />,
  },

  {
    text: "Apparel",
    icon: <UserIcon className="size-4 lg:size-[18px]" />,
  },
  {
    text: "New",
    icon: <CheckBadgeIcon className="size-4 lg:size-[18px]" />,
  },
  {
    text: "Free",
    icon: <CurrencyDollarIcon className="size-4 lg:size-[18px]" />,
  },
];
