"use client";
import React from "react";
import Link from "next/link";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Policy",
    href: "/policy",
  },
];

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="block md:flex">
      {navItems.map((item, index) => (
        <h5
          key={item.title}
          className={`md:inline-block px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${
            activeItem === index && "text-[#6dff4b]"
          }`}
        >
          <Link href={item.href}>{item.title}</Link>
        </h5>
      ))}
    </div>
  );
};

export default Navigation;
