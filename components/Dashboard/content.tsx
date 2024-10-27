"use client";

import PerfectScrollbar from "perfect-scrollbar";
import { useEffect, useRef } from "react";
import DashboardNavBar from "./navbar";
import DashboardPlaceHolder from "./placeholder";

export default function ContentHolder({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const sideBarRef: any = useRef(null);
  useEffect(() => {
    const ps = new PerfectScrollbar(sideBarRef.current, {
      wheelPropagation: true,
    });
    return () => {
      ps.destroy();
    };
  }, []);
  return (
    <div
      className="relative max-h-screen min-h-full rounded-xl transition-all duration-200 xl:ml-72"
      ref={sideBarRef}
    >
      {/* todo: pass the session here */}
      <DashboardNavBar />
      <DashboardPlaceHolder>{children}</DashboardPlaceHolder>
    </div>
  );
}
