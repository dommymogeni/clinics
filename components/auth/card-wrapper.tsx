"use client";

import Header from "@/components/auth/header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import BackButton from "./back-button";
import Social from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial: boolean;
}

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-full rounded-lg shadow-md dark:bg-gray-800 md:max-w-screen-sm">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter className="block">
          <p className="mb-4 block w-full text-center">OR</p>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}
