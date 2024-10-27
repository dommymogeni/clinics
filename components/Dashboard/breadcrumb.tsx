// refrence: https://github.com/kcabading/nextjs-breadcrumb/blob/main/src/component/NextBreadcrumb.tsx
"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const Breadcrumbs = () => {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter((segment) => segment);

  return (
    <nav>
      <Breadcrumb className="hidden md:block">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.length > 0 && <BreadcrumbSeparator />}

          {pathSegments.map((segment, index) => {
            const links = `/${pathSegments.slice(0, index + 1).join("/")}`;

            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={links}>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {pathSegments.length !== index + 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <h6 className="mb-0 font-bold capitalize">{pathName.split('/').filter(Boolean).pop()}</h6>
    </nav>
  );
};

export default Breadcrumbs;
