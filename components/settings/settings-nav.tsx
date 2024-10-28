"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface NavItem {
  icon?: JSX.Element;
  href: string;
  title: string;
}

interface SettingsNavProps {
  settingsNavItems: NavItem[];
}

const SettingsNav = ({ settingsNavItems }: SettingsNavProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* mobile devices upto tablet size */}
      <div className="block p-1 lg:hidden">
        <Select>
          <SelectTrigger className="h-12 w-full">
            <SelectValue placeholder="Settings" />
          </SelectTrigger>

          <SelectContent>
            {settingsNavItems.map((item) => (
              <SelectItem
                value={item.title}
                key={item.href}
                className="cursor-pointer"
              >
                <div className="flex gap-x-4 px-2 py-1">
                  <span className="scale-125">{item.icon}</span>
                  <span className="text-md">{item.title}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* tablet size and above */}
      <nav className="hidden space-y-2 break-words rounded-xl bg-card bg-clip-border p-4 shadow-soft-xl lg:block">
        {settingsNavItems.map((item) => (
          <Link
            key={item.href}
            className={cn(
              "ease-soft-in-out flex h-9 items-center rounded-lg px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-muted hover:text-accent-foreground",
              pathname === item.href ? "bg-muted text-accent-foreground" : "",
            )}
            aria-label={item.title}
            href={item.href}
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default SettingsNav;
