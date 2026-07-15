"use client";

import { usePathname } from "next/navigation";
import SiteNav from "./SiteNav";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <SiteNav />;
}
