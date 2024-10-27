"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUserSession } from "@/hooks/use-current-user";
import { BookOpenTextIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { ModeToggle } from "../gen/mode-toogle";
import Breadcrumbs from "./breadcrumb";
import SidebarToogle from "./sidedar-toogle";

export default function DashboardNavBar() {
  const user = useCurrentUserSession();
  return (
    <nav className="ease-soft-in top-[1%] z-[110] mx-6 mt-6 flex flex-wrap items-center justify-between rounded-2xl border border-muted bg-card px-0 py-2 shadow-none backdrop-blur-2xl backdrop-saturate-200 transition-all duration-300 lg:flex-nowrap lg:justify-start">
      <div className="flex-wrap-inherit mx-auto flex w-full items-center justify-between px-4 py-1">
        <div className="flex items-center">
          <Breadcrumbs />
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.image || ""} alt="user" />
                  <AvatarFallback className="bg-primary/40">
                    <FaUser className="text-white" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium leading-none">{user?.name}</p>

                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email || ""}
                  </p>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={"/dashboard/profile"}>Profile</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href={"/dashboard/billing"}>
                    Billing
                    <DropdownMenuShortcut>
                      <BookOpenTextIcon />
                    </DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href={"/dashboard/Settings"}>
                    Settings
                    <DropdownMenuShortcut>
                      <SettingsIcon />
                    </DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Button variant="link" onClick={() => signOut()} className="w-full !no-underline">
                    Log out
                    <DropdownMenuShortcut>
                      <LogOutIcon />
                    </DropdownMenuShortcut>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <SidebarToogle />
        </div>
      </div>
    </nav>
  );
}
