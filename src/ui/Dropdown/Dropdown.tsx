import { forwardRef } from "react";
import clsx from "clsx";
import {
  DropdownMenuPortal as DefaultDropdownMenuPortal,
  DropdownMenuContent as DefaultDropdownMenuContent,
  DropdownMenuItem as DefaultDropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import type { DropdownContentProps, DropdownItemType } from "./types";
import Typography from "@/ui/Typography";
import s from "./Dropdown.module.css";
import { ICON_M_SIZE } from "@/constants";

export const DropdownContent: React.FC<DropdownContentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <DefaultDropdownMenuPortal>
      <DefaultDropdownMenuContent
        className={clsx(s.wrap, className)}
        sideOffset={4}
        {...rest}
      >
        {children}
      </DefaultDropdownMenuContent>
    </DefaultDropdownMenuPortal>
  );
};

export const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownItemType>(
  ({ text, Icon, children, disabled, className, ...rest }, ref) => {
    return (
      <DefaultDropdownMenuItem
        className={clsx(s.item, className)}
        disabled={disabled}
        {...rest}
        ref={ref}
      >
        <Icon className={s.icon} size={ICON_M_SIZE} />
        <div className={s.content}>
          <Typography component="span">{text}</Typography>
        </div>
        {children}
      </DefaultDropdownMenuItem>
    );
  }
);

DropdownMenuItem.displayName = "DropdownMenuItem";
