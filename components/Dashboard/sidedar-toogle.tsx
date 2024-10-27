import { useMenuStore } from "@/hooks/use-navbar-Store";
import { HiMenu } from "react-icons/hi";
import { Button } from "../ui/button";

export default function SidebarToogle() {
  const { isOpen, toggleMenu } = useMenuStore();

  return (
    <Button className="block xl:hidden" onClick={toggleMenu}>
      <HiMenu />
    </Button>
  );
}
