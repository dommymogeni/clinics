import { auth } from "@/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "digiclinic",
  description:
    "an online health care appliction focused on bringing specialised treatment on your door step",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return <div>{children}</div>;
}
