"use client";

import { useTheme } from "next-themes";
import { BiSolidMoon } from "react-icons/bi";
import { PiSunDimFill } from "react-icons/pi";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const isActive = theme === "light";

  const switchClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full transform ${
    isActive ? "translate-x-0" : "translate-x-6"
  } transition-transform duration-500 ease-in-out`;

  return (
    <div
      className="relative h-8 w-14 cursor-pointer rounded-full bg-[#ccc] p-1"
      onClick={toggleTheme}
      onKeyDown={toggleTheme}
    >
      <button type="button" className={switchClasses}>
        {isActive ? <PiSunDimFill size={16} /> : <BiSolidMoon />}
      </button>
    </div>
  );
}
