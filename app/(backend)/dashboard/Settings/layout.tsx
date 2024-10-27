import Settings from "@/components/settings/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "domClinic",
  description: "setting page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Settings>{children}</Settings>;
}
