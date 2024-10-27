import { LiaToolsSolid } from "react-icons/lia";
import { LuUserCog2 } from "react-icons/lu";
import { MdPassword } from "react-icons/md";
import { Separator } from "../ui/separator";
import SettingsNav from "./settings-nav";

function Settings({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarNavItems = [
    {
      title: "Profile",
      icon: <LuUserCog2 size={18} />,
      href: "/dashboard/Settings",
    },
    {
      title: "Account",
      icon: <LiaToolsSolid size={18} />,
      href: "/dashboard/Settings/account",
    },
    {
      title: "Change password",
      icon: <MdPassword size={18} />,
      href: "/dashboard/Settings/change-password",
    },
  ];

  return (
    <div>
      <div className="space-y-0.5">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      <Separator />

      <div className="flex flex-wrap -mx-3">

        <aside className="sticky top-0 lg:w-3/12 w-full px-3 shrink-0 max-w-full">
          <SettingsNav settingsNavItems={sidebarNavItems} />
        </aside>

        <div className="lg:w-9/12 w-full px-3 shrink-0 max-w-full">{children}</div>
      </div>
    </div>
  );
}

export default Settings;
