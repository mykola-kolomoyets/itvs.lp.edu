import type { FCProps } from "@/types";
import type { IconIdType } from "@/ui/Icon";

export type NavLinkProps<T> = FCProps<{
  as?: T;
  size?: "base" | "lg";
  iconId?: IconIdType;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
