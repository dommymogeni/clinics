import Dashboard from "@/components/Dashboard/dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "domClinic",
  description: "administrator dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Dashboard>{children}</Dashboard>
}
