import { RiNewspaperLine, RiUser3Line } from "react-icons/ri";

export const ADMIN_PANEL_SIDEBAR_ITEMS = {
  USERS: "users",
  ARTICLES: "articles",
};

export const ADMIN_PANEL_SIDEBAR_LIST = [
  {
    id: ADMIN_PANEL_SIDEBAR_ITEMS.USERS,
    title: "Користувачі",
    Icon: RiUser3Line,
  },
  {
    id: ADMIN_PANEL_SIDEBAR_ITEMS.ARTICLES,
    title: "Статті",
    Icon: RiNewspaperLine,
  },
] as const;
