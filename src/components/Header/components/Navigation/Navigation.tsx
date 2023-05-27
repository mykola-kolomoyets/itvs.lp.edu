import { memo } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { NavigationProps } from "./types";
import {
  INTERNAL_NAV_LINKS,
  EXTERNAL_NAV_LINKS,
  LINK_TYPES,
} from "@/components/Header/constants";
import NavLink from "../NavLink";
import s from "./Navigation.module.css";

const Navigation: React.FC<NavigationProps> = ({
  className,
  itemClassName,
  navLinkSize = "base",
  withDivider,
}) => {
  return (
    <nav className="w-full max-w-[723px]">
      <ul className={clsx(s.wrap, className)}>
        {INTERNAL_NAV_LINKS.map((link) => {
          return (
            <li key={link.href}>
              <NavLink
                className={itemClassName}
                href={link.href}
                as={Link}
                size={navLinkSize}
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
        {withDivider ? <div className={s.divider} /> : null}
        {EXTERNAL_NAV_LINKS.map((link) => {
          return (
            <li key={link.href}>
              <NavLink
                className={itemClassName}
                href={link.href}
                size={navLinkSize}
                iconId={
                  link.type === LINK_TYPES.EXTERNAL
                    ? "icon-external-link_14"
                    : undefined
                }
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(Navigation);
