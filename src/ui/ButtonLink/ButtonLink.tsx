import { memo, useCallback } from "react";
import clsx from "clsx";
import type { IconSizeType } from "@/ui/Icon";
import type { ButtonLinkProps } from "./types";
import Icon from "@/ui/Icon";
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
  iconClassName,
  className,
  ...rest
}: ButtonLinkProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonLinkProps<T>>) => {
  const Component = as || "a";
  let iconJSX: React.ReactNode = null;
  const tabIndexProp = disabled ? { tabIndex: -1 } : {};

  const disabledLinkHandler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
    },
    []
  );

  if (!iconChild && icon && iconSide) {
    const iconSize = "md";

    iconJSX = (
      <Icon
        id={icon}
        size={iconSize as IconSizeType}
        className={clsx(
          s.icon,
          iconSide && s[`icon-${iconSide}`],
          iconClassName
        )}
      />
    );
  }

  return (
    <Component
      className={clsx(
        s["button-link"],
        s[variant],
        s[size],
        disabled && s.disabled,
        iconChild && s["with-icon-child"],
        "focus-primary",
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
