"use client";

import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export default function NavLink({
  href,
  children,
  className,
  ...rest
}: PropsWithChildren<LinkProps & { className?: string }>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...rest}
      className={cn(isActive ? "border-b" : "", "transition-all hover:opacity-50", className)}
    >
      {children}
    </Link>
  );
}
