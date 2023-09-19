"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const naviList = [
  {
    path: "/subject",
    as: "/subject",
    description: "subject",
  },
  {
    path: "/artistic",
    as: "/artistic",
    description: "artistic",
  },
  {
    path: "/composition",
    as: "/composition",
    description: "composition",
  },
  {
    path: "/mood",
    as: "/mood",
    description: "mood",
  },
  {
    path: "/tone",
    as: "/tone",
    description: "tone",
  },
];

const Nav = () => {
  const location = usePathname();
  const param = useSearchParams();
  const previewSelection = param.get("selection");
  console.log(previewSelection);
  return (
    <header>
      <nav className="w-full flex md:grid md:grid-cols-5 md:gap-x-6 md:justify-between">
        {naviList.map((nav) => (
          <Link
            key={nav.path}
            className={cn(
              "rounded-md border-muted border-2 p-4 bg-primary grow text-center",
              location !== nav.path && "hidden md:block"
            )}
            href={
              previewSelection ? `${nav.path}?${param.toString()}` : nav.path
            }
          >
            {nav.description}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
};

export default Nav;
