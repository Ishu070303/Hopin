'use client'

import React from "react";

import { SideBarLinks } from "@/contants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section
      className="sticky left-0 top-0 flex h-screen w-fit text-white flex-col justify-between bg-dark-1 p-6 pt-28
    max-sm:hidden lg:w-[264px]"
    >
      <div className="flex flex-col flex-1 gap-6">
        {SideBarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
