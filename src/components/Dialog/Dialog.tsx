import { memo } from "react";
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle,
  Close as DialogClose,
} from "@radix-ui/react-dialog";
import { RiCloseFill } from "react-icons/ri";
import clsx from "clsx";
import type { DialogProps } from "./types";
import { ICON_L_SIZE } from "@/constants";
import Button from "@/ui/Button";
import s from "./Dialog.module.css";

const Dialog: React.FC<DialogProps> = ({
  className,
  children,
  title,
  triggerElement,
}) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{triggerElement}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className={s.overlay} />
        <DialogContent className={clsx(s.content, className)}>
          <DialogTitle className={s.title}>{title}</DialogTitle>
          {children}
          <DialogClose className={s.close}>
            <Button
              variant="ghost"
              iconChild={<RiCloseFill className={s.icon} size={ICON_L_SIZE} />}
            />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
};

export default memo(Dialog);
