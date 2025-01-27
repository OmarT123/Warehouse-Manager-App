import React from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";
import {
  GearIcon,
  HomeIcon,
  ArchiveIcon,
  BarChartIcon,
  PersonIcon,
  CardStackPlusIcon,
  SewingPinIcon,
} from "@radix-ui/react-icons";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home", icon: <HomeIcon />, disabled: false },
  {
    href: "/products",
    label: "Products",
    icon: <ArchiveIcon />,
    disabled: false,
  },
  {
    href: "/dashboard",
    label: "Dashboards",
    icon: <BarChartIcon />,
    disabled: true,
  },
  { href: "/stores", label: "Stores", icon: <SewingPinIcon />, disabled: true },
  {
    href: "/customers",
    label: "Customers",
    icon: <PersonIcon />,
    disabled: true,
  },
  {
    href: "/sales",
    label: "Sales",
    icon: <CardStackPlusIcon />,
    disabled: true,
  },
  { href: "/settings", label: "Settings", icon: <GearIcon />, disabled: true },
];

const SideBar = () => {
  return (
    <nav className="relative w-60 min-w-60 h-screen p-4 flex flex-col dark:bg-dark-secondary bg-light-secondary">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-center text-light-text dark:text-dark-text">
          Warehouse App
        </h2>
      </div>

      <hr className="mb-5" />

      <div>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <Button
              variant="ghost"
              className={`w-full flex flex-col items-center justify-center text-gray-700 text-sm mb-2 pt-2 dark:text-dark-text disabled:dark:opacity-25 ${
                item.disabled
                  ? "disabled:text-gray-400 hover:cursor-not-allowed dark:text-dark-text-secondary"
                  : "hover:bg-gray-200 dark:hover:bg-dark-bg hover:text-gray-900 hover:cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105"
              }`}
              disabled={item.disabled}
            >
              <div className="mb-1">{item.icon}</div>
              <span>{item.label}</span>
            </Button>
          </Link>
        ))}
      </div>

      <ThemeToggle />
    </nav>
  );
};

export default SideBar;
