import { memo } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import clsx from "clsx";
import type { NavLinkProps } from "./types";
import { ICON_M_SIZE, ICON_S_SIZE } from "@/constants";
import Typography from "@/ui/Typography";
import s from "./NavLink.module.css";

const NavLink = <T extends React.ElementType = "a">({
  className,
  children,
  as,
  size = "base",
  isExternal,
  ...rest
}: NavLinkProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof NavLinkProps<T>>) => {
  const Component = as || "a";

  return (
    <Component
      className={clsx(s.wrap, s[size], "focus-primary", className)}
      {...rest}
    >
      <Typography
        className={clsx(s.text, s[size])}
        component="span"
        variant={size == "base" ? "sm" : "lg"}
      >
        {children}
      </Typography>
      {isExternal ? (
        <RiShareBoxLine
          className={s.icon}
          size={size === "base" ? ICON_S_SIZE : ICON_M_SIZE}
        />
      ) : null}
    </Component>
  );
};

export default memo(NavLink);
