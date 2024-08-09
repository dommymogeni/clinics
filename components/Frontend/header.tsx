import { AlignJustify } from "lucide-react";
import Link from "next/link";
import SignInBtn from "../auth/login-button";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center py-4 text-blue-900">
          {/* divider btwn the navbar and the hero section */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-slate-900/5" />

          {/* logo */}
          <Link href={"/"}>dom clinics</Link>

          {/* navigation links to navigate to other pages of the website */}
          <div className="ml-auto hidden lg:items-center xl:flex">
            <Link href={"/"} className="capitalize hover:text-blue-600">
              Home
            </Link>
            <Link
              href={"/Specialty"}
              className="ml-4 capitalize hover:text-blue-600"
            >
              Specialty
            </Link>
            <Link
              href={"/procedures"}
              className="ml-4 capitalize hover:text-blue-600"
            >
              procedures
            </Link>
            <Link
              href={"/condition"}
              className="ml-4 capitalize hover:text-blue-600"
            >
              condition
            </Link>
            <Link
              href={"/register"}
              className="ml-4 capitalize hover:text-blue-600"
            >
              claim practionership
            </Link>
          </div>

          {/* trigger button for the mobile menu to be opened or closed */}
          <Button className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden">
            <AlignJustify className="text-white" />
          </Button>

          <div className="hidden lg:ml-4 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-4">
            <SignInBtn>
              <Link
                href={"/signup"}
                className="-my-2.5 ml-0 inline-flex justify-center rounded-lg border px-4 py-2.5 text-sm font-semibold hover:bg-blue-700 hover:text-white"
              >
                Sign up
              </Link>
            </SignInBtn>

            <SignInBtn>
              <Link
                href={"/login"}
                className="-my-2.5 ml-2 inline-flex justify-center rounded-lg bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Sign in
              </Link>
            </SignInBtn>
          </div>
        </div>
      </nav>
    </header>
  );
}
