export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh items-center justify-center bg-background dark:bg-background">
      {children}
    </div>
  );
}
