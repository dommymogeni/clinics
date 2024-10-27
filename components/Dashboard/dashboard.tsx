import ContentHolder from "./content";
import SideBar from "./sidebar";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      <ContentHolder>{children}</ContentHolder>
    </>
  );
}
