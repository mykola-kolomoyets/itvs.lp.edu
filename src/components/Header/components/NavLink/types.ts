import type { FCProps } from "@/types";

export type NavLinkProps<T> = FCProps<{
  as?: T;
  size?: "base" | "lg";
  isExternal?: boolean;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
