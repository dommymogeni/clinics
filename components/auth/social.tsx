import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Social = () => {
  const onClick = () => {};
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Button variant="outline" className="flex w-full justify-between">
        <span>google</span>
        <FcGoogle className="h-5 w-5" />
      </Button>

      <Button variant="outline" className="flex w-full justify-between">
        <span>google</span>
        <FaFacebook className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
