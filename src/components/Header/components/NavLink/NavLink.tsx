import { memo } from "react";
import clsx from "clsx";
import type { NavLinkProps } from "./types";
import Typography from "@/ui/Typography";
import Icon from "@/ui/Icon";
import s from "./NavLink.module.css";

const NavLink = <T extends React.ElementType = "a">({
  className,
  children,
  as,
  size = "base",
  iconId,
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
      {iconId ? <Icon className={s.icon} id={iconId} /> : null}
    </Component>
  );
};

export default memo(NavLink);
