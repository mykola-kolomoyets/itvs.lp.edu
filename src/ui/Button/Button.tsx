import { memo, forwardRef } from "react";
import clsx from "clsx";
import type { ButtonProps } from "./types";
import Loader from "@/ui/Loader";
import s from "./Button.module.css";
import { ICON_L_SIZE, ICON_M_SIZE } from "@/constants";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      iconChild,
      variant = "primary",
      size = "md",
      disabled,
      loading,
      icon,
      iconSide,
      className,
      ...rest
    },
    ref
  ) => {
    const iconJSX: React.ReactNode = iconChild && iconSide ? iconChild : icon;

    return (
      <button
        className={clsx(
          s.button,
          s[variant],
          s[size],
          iconChild && s["with-icon-child"],
          icon && iconSide && s[`with-icon-${iconSide}`],
          loading && s.loading,
          "focus-primary",
          className
        )}
        disabled={disabled || loading}
        {...rest}
        ref={ref}
      >
        {loading && (
          <Loader
            size={size === "md" ? ICON_L_SIZE : ICON_M_SIZE}
            className={s.loader}
          />
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
