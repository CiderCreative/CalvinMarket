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
    icon: <PencilIcon className="size-[18px]" />,
  },
  {
    text: "Books",
    icon: <BookOpenIcon className="size-[18px]" />,
  },
  {
    text: "Furniture",
    icon: <HomeIcon className="size-[18px]" />,
  },
  {
    text: "Electronics",
    icon: <DevicePhoneMobileIcon className="size-[18px]" />,
  },

  {
    text: "Apparel",
    icon: <UserIcon className="size-[18px]" />,
  },
  {
    text: "New",
    icon: <CheckBadgeIcon className="size-[18px]" />,
  },
  {
    text: "Free",
    icon: <CurrencyDollarIcon className="size-[18px]" />,
  },
];
