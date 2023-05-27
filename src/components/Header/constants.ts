import type { NavLinkConfig } from "./types";
import { PATHS, VNS_URL, STUDENTS_SCHEDULE_URL } from "@/constants";

export const LINK_TYPES = {
  INTERNAL: "internal",
  EXTERNAL: "external",
} as const;

export const INTERNAL_NAV_LINKS: NavLinkConfig[] = [
  {
    label: "Головна",
    href: PATHS.MAIN,
  },
  {
    label: "Новини",
    href: PATHS.NEWS,
  },
  {
    label: "Колектив",
    href: PATHS.COLLECTIVE,
  },
  {
    label: "Про Нас",
    href: PATHS.ABOUT,
  },
];

export const EXTERNAL_NAV_LINKS: NavLinkConfig[] = [
  {
    label: "ВНС",
    href: VNS_URL,
    type: LINK_TYPES.EXTERNAL,
  },
  {
    label: "Розклад",
    href: STUDENTS_SCHEDULE_URL,
    type: LINK_TYPES.EXTERNAL,
  },
];
