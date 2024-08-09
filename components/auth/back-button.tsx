"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button className="w-full" asChild variant="default">
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export default BackButton;
