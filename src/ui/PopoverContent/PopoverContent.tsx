import { memo } from "react";
import {
  Portal as PopoverPortal,
  Content as DefaultPopoverContent,
  Close as PopoverClose,
} from "@radix-ui/react-popover";
import clsx from "clsx";
import type { PopoverContentProps } from "./types";
import Button from "@/ui/Button";
import Typography from "@/ui/Typography";
import s from "./PopoverContent.module.css";
import { RiCloseLine } from "react-icons/ri";
import { ICON_M_SIZE } from "@/constants";

const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  title,
  className,
  ...rest
}) => {
  return (
    <PopoverPortal>
      <DefaultPopoverContent
        className={clsx(s.wrap, className)}
        sideOffset={4}
        align="end"
        collisionPadding={16}
        {...rest}
      >
        <header className={s.header}>
          <Typography variant="lg" component="h2" className={s.title}>
            {title}
          </Typography>
          <PopoverClose asChild>
            <Button
              className={s["btn-close"]}
              iconChild={<RiCloseLine className={s.icon} size={ICON_M_SIZE} />}
              variant="ghost"
              size="sm"
            />
          </PopoverClose>
        </header>
        {children}
      </DefaultPopoverContent>
    </PopoverPortal>
  );
};

export default memo(PopoverContent);
