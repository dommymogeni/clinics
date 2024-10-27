import BackButton from "@/components/auth/back-button";
import Header from "@/components/auth/header";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

const ErrorCard = () => {
  return (
    <Card className="w-full rounded-lg bg-red-100 shadow-md md:max-w-screen-sm">
      <CardHeader>
        <Header label={"ooops! something went worng"} />
      </CardHeader>

      <CardFooter>
        <BackButton href={"/login"} label={"Back to login"} />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
