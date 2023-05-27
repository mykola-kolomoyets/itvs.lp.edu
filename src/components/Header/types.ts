import type { ObjValues } from "@/types";
import type { LINK_TYPES } from "./constants";

export type LinkType = ObjValues<typeof LINK_TYPES>;

export type NavLinkConfig = {
  label: string;
  href: string;
  type?: LinkType;
};
