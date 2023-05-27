import { memo, useCallback } from "react";
import clsx from "clsx";
import type { ButtonLinkProps } from "./types";
import s from "./ButtonLink.module.css";

const ButtonLink = <T extends React.ElementType = "a">({
  children,
  iconChild,
  as,
  size = "md",
  variant = "primary",
  disabled,
  iconSide,
  icon,
  className,
  ...rest
}: ButtonLinkProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonLinkProps<T>>) => {
  const Component = as || "a";
  const iconJSX: React.ReactNode = iconChild && iconSide ? iconChild : icon;
  const tabIndexProp = disabled ? { tabIndex: -1 } : {};

  const disabledLinkHandler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
    },
    []
  );

  return (
    <Component
      className={clsx(
        s["button-link"],
        s[variant],
        s[size],
        disabled && s.disabled,
        iconChild && s["with-icon-child"],
        "focus-primary",
        icon && iconSide && s[`with-icon-${iconSide}`],
        className
      )}
      onClick={disabled ? disabledLinkHandler : undefined}
      {...tabIndexProp}
      {...rest}
    >
      {iconJSX}
      {iconChild ? iconChild : <span>{children}</span>}
    </Component>
  );
};

export default memo(ButtonLink);
