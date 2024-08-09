interface HeaderProps {
  label: string;
}

function Header({ label }: HeaderProps) {
  return (
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
      {label}
    </h1>
  );
}

export default Header;
