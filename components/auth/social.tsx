import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { signIn } from "next-auth/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Social = () => {
  const onClick = (provider: "google") => {
    signIn(provider, {callbackUrl: DEFAULT_LOGIN_REDIRECT})
  };

  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Button variant="outline" className="flex w-full items-center gap-4" onClick={()=>onClick("google")}>
        <span>login with google</span>
        <FcGoogle className="h-5 w-5" />
      </Button>

      <Button variant="outline" className="flex w-full items-center gap-4" disabled>
        <span>Facebook</span>
        <FaFacebook className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
