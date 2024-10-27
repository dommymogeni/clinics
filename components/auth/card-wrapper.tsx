"use client";

import Header from "@/components/auth/header";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
          <div className="pb-6">
            <span className="relative flex justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75" />
              <span className="relative z-10 bg-white px-6">OR</span>
            </span>
          </div>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}
