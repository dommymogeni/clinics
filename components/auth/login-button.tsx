"use client";

import { useRouter } from "next/navigation";

interface SignInBtnProps {
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const SignInBtn = (
  { children }: { children: React.ReactNode },
  { mode = "redirect", asChild }: SignInBtnProps,
) => {
  const router = useRouter();

  // clicking function that would be used in the redirection when the button is pressed
  const onClick = () => {
    router.push("/login")
  };

  const onKeyDown = () => {
    console.log("keyboard pressed");
  };
  return (
    <div className="cursor-pointer" onClick={onClick} onKeyDown={onKeyDown}>
      {children}
    </div>
  );
};

export default SignInBtn;
