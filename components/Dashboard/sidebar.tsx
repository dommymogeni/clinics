"use client";

import { useMenuStore } from "@/hooks/use-navbar-Store";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import PerfectScrollbar from "perfect-scrollbar";
import { useEffect, useRef } from "react";
import { Separator } from "../ui/separator";
import SidebarLinks from "./sidebar-links";

export default function SideBar() {
  const { isOpen, toggleMenu } = useMenuStore();

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const sideBarRef: any = useRef(null);
  useEffect(() => {
    const ps = new PerfectScrollbar(sideBarRef.current, {
      wheelPropagation: true,
      minScrollbarLength: 20,
    });
    return () => {
      ps.destroy();
    };
  }, []);

  return (
    <>
      {/* sidebar */}
      <aside
        className={cn(
          "ease-soft-in-out ps ps--active-y fixed inset-y-0 left-0 z-[990] my-4 ml-5  block w-full max-w-64 flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-card bg-card p-0 shadow-none transition-all duration-200 xl:translate-x-0",
          isOpen
            ? "translate-x-0 transition-all duration-300 ease-in-out block"
            : "-translate-x-full transition-all hidden lg:block",
        )}
        ref={sideBarRef}
      >
        <div className="h-20">
          {/* <X
            className="absolute right-2 top-2 cursor-pointer xl:hidden"
            onClick={toggleMenu}
          /> */}

          <Link
            href={"/"}
            className="m-0 block whitespace-nowrap px-8 py-6 text-sm text-slate-700 dark:text-white"
          >
            <Image
              src="/logo-dark.webp"
              className="ease-soft-in-out inline-block h-full max-h-8 max-w-full transition-all duration-200 dark:hidden"
              alt="main_logo"
              width={40}
              height={40}
            />

            <Image
              src="/logo.webp"
              className="ease-soft-in-out hidden h-full max-h-8 max-w-full transition-all duration-200 dark:inline-block"
              alt="main_logo"
              width={40}
              height={40}
            />

            <span className="ease-soft-in-out ml-1 font-semibold opacity-100 transition-all duration-200">
              DomClinics Dashboard
            </span>
          </Link>
        </div>

        <Separator className="!mt-0"/>

        {/* contains links to navigate */}
        <div className="block h-auto w-full grow basis-full items-center">
          <SidebarLinks />
        </div>
      </aside>

      {/* overlay div */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={cn(
          "absolute inset-0 z-[120] min-h-full min-w-full cursor-pointer backdrop-blur-0",
          isOpen ? "block xl:hidden" : "hidden",
        )}
        onClick={toggleMenu}
      />
    </>
  );
}
