import type { IconType } from "react-icons";
import type { WithClassName } from "@/types";

export type SidebarOptionItemProps = WithClassName<{
  id: string;
  active?: boolean;
  title: string;
  Icon?: IconType;
}>;
