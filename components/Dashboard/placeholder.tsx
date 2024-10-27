export default function DashboardPlaceHolder({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto w-full p-6">{children}</div>;
}
