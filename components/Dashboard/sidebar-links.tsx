"use client";

import { useCurrentUsertRole } from "@/hooks/use-current-role";
import { cn } from "@/lib/utils";
import { UserRole } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTasks } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdCalendarMonth, MdInbox, MdOutlineSpaceDashboard } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";

export default function SidebarLinks() {
  const pathname = usePathname();
  const role: UserRole = useCurrentUsertRole();

  const roleLinks = {
    USER: [
      { title: "dashboard", href: "/dashboard", icon: MdOutlineSpaceDashboard },
      {
        title: "my appointments",
        href: "/dashboard/user/appointment",
        icon: MdCalendarMonth,
      },
      { title: "doctors", href: "/dashboard/user/doctors", icon: FaUserDoctor },
      { title: "inbox", href: "/dashboard/user/inbox", icon: MdInbox },
      { title: "Settings", href: "/dashboard/Settings", icon: IoSettingsOutline },
    ],
    DOCTOR: [
      { title: "dashboard", href: "/dashboard", icon: MdOutlineSpaceDashboard },
      {
        title: "my appointments",
        href: "/dashboard/user/appointment",
        icon: MdCalendarMonth,
      },
      {
        title: "patients",
        href: "/dashboard/doctors/patients",
        icon: PiUsersThreeBold,
      },
      { title: "tasks", href: "/dashboard/doctors/tasks", icon: FaTasks },
      { title: "inbox", href: "/dashboard/doctors/inbox", icon: MdInbox },
      { title: "Settings", href: "/dashboard/Settings", icon: IoSettingsOutline },
    ],
    ADMIN: [
      { title: "dashboard", href: "/dashboard", icon: MdOutlineSpaceDashboard },
      { title: "doctors", href: "/dashboard/admin/doctors", icon: FaUserDoctor },
      {
        title: "patients",
        href: "/dashboard/admin/patients",
        icon: PiUsersThreeBold,
      },
      { title: "tasks", href: "/dashboard/admin/tasks", icon: FaTasks },
      { title: "inbox", href: "/dashboard/admin/inbox", icon: MdInbox },
      { title: "Settings", href: "/dashboard/Settings", icon: IoSettingsOutline },
    ],
  };

  const sidebarLinks: any[] = roleLinks[role];

  return (
    <ul className="mb-0 mt-0.5 flex list-none flex-col pl-0">
      {sidebarLinks.map((items) => {
        const Icon = items.icon;
        return (
          <li key={items.title} className="mt-0.5 w-full">
            <Link
              href={items.href}
              className={cn(
                "ease-soft-in-out mx-4 my-0 flex items-center whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold shadow-none transition-all hover:bg-muted",
                pathname === items.href ? "bg-muted text-accent-foreground" : "",
              )}
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-gradient-to-tl from-blue-600 to-cyan-400 bg-center fill-current stroke-none p-2.5 text-center text-white shadow-soft-sm">
                <Icon size={20} className="h-8 w-8" />
              </div>

              <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                {items.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
function useCurrenUserRole() {
  throw new Error("Function not implemented.");
}
