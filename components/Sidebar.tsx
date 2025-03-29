"use client";
import { navigationLinks } from "@/constants";
import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-xs w-[250px] max-md:w-[100px] sticky left-0 top-0 flex h-screen flex-col justify-between px-5 pb-5 pt-5 border-r border-border max-md:hidden">
      <div>
        <div className="mt-10 flex-col gap-5">
          {navigationLinks.map((link) => {
            const isSelected =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link
                href={link.route}
                key={link.route}
               >
                <div
                  className={cn("flex flex-row items-center w-full gap-x-5 rounded-lg px-5 py-3.5 max-md:justify-center", isSelected && "bg-tmmf shadow-sm")}
                >
                  <div className="relative size-5">
                    <Image
                      src={link.img}
                      alt="icon"
                      fill
                      className={`${
                        isSelected ? "brightness-0 invert" : "brightness-0"
                      } object-contain`}
                    />
                  </div>
                  <p
                    className={cn(
                      "text-base font-medium max-md:hidden",
                      isSelected ? "text-white" : "text-dark"
                    )}
                  >
                    {link.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="cursor-pointer flex w-full flex-row items-center  gap-2 rounded-full border border-gray-300 px-6 py-2 shadow-sm max-md:px-2">
        <Avatar>
          <AvatarFallback className="bg-tmmf text-white font-medium">
            {getInitials("User Name")}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col max-md:hidden">
          <p className="font-semibold text-gray-950">User Name</p>
          <p className="text-gray-400 text-xs">user@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
