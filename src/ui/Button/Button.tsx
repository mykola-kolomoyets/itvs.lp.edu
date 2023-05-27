import { memo, forwardRef } from "react";
import clsx from "clsx";
import type { IconSizeType } from "@/ui/Icon";
import type { ButtonProps } from "./types";
import Loader from "@/ui/Loader";
import Icon from "@/ui/Icon";
import s from "./Button.module.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      iconChild,
      variant = "primary",
      size = "md",
      disabled,
      loading,
      iconSide,
      icon,
      iconClassName,
      className,
      ...rest
    },
    ref
  ) => {
    let iconJSX: React.ReactNode = null;

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
      <button
        className={clsx(
          s.button,
          s[variant],
          s[size],
          iconChild && s["with-icon-child"],
          loading && s.loading,
          "focus-primary",
          className
        )}
        disabled={disabled || loading}
        {...rest}
        ref={ref}
      >
        {loading && (
          <Loader size={size === "md" ? 20 : 16} className={s.loader} />
        )}
        <span className={clsx(s.inner, loading && "opacity-0")}>
          {iconJSX}
          {iconChild ? iconChild : <span>{children}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default memo(Button);
