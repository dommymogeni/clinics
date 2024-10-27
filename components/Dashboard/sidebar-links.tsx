"use client";

import { useCurrentUsertRole } from "@/hooks/use-current-role";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTasks } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdCalendarMonth, MdInbox, MdOutlineSpaceDashboard } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";

type Role = "USER" | "DOCTOR" | "ADMIN";

export default function SidebarLinks() {
  const pathname = usePathname();
  const role: Role = useCurrentUsertRole();

  const roleLinks: Record<
    Role,
    { title: string; href: string; icon: React.ComponentType<any> }[]
  > = {
    USER: [
      { title: "dashboard", href: "/dashboard", icon: MdOutlineSpaceDashboard },
      {
        title: "my appointments",
        href: "/dashboard/user/appointment",
        icon: MdCalendarMonth,
      },
      { title: "doctors", href: "/dashboard/user/doctors", icon: FaUserDoctor },
      { title: "inbox", href: "/dashboard/user/inbox", icon: MdInbox },
      { title: "settings", href: "/dashboard/settings", icon: IoSettingsOutline },
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
      { title: "settings", href: "/dashboard/settings", icon: IoSettingsOutline },
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
      { title: "settings", href: "/dashboard/settings", icon: IoSettingsOutline },
    ],
  };

  const sidebarLinks = roleLinks[role] || [];
  const linkClass =
    "ease-soft-in-out mx-4 my-0 flex items-center whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold shadow-none transition-all hover:bg-muted";

  return (
    <ul className="mb-0 mt-0.5 flex list-none flex-col pl-0">
      {sidebarLinks.map(({ title, href, icon: Icon }) => (
        <li key={title} className="mt-0.5 w-full">
          <Link
            href={href}
            aria-label={title}
            className={cn(
              linkClass,
              pathname === href ? "bg-muted text-accent-foreground" : "",
            )}
          >
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-gradient-to-tl from-blue-600 to-cyan-400 bg-center fill-current stroke-none p-2.5 text-center text-white shadow-soft-sm">
              <Icon className="h-5 w-5" />
            </div>
            <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
              {title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
