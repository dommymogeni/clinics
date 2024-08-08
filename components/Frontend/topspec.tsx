import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import Link from "next/link";

export default function Topspec() {
  return (
    <div className="">
      <div className="container rounded-md bg-blue-950">
        <div className="py-9">
          <h3 className="text-4xl font-normal capitalize">
            popular specialities
          </h3>

          {/* todo: get the trending speciality from the database atleast 6 specialities */}
          <div className="flex flex-wrap justify-between">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <Link href={""} className="text-blue-600">Load more</Link>
        </div>
      </div>
    </div>
  );
}
