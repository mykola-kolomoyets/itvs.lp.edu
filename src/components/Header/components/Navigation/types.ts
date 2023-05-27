import type { WithClassName } from "@/types";
import type { NavLinkProps } from "../NavLink";

export type NavigationProps = WithClassName<{
  navLinkSize?: NavLinkProps<undefined>["size"];
  withDivider?: boolean;
  itemClassName?: string;
}>;
