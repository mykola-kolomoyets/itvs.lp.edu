import { memo } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import clsx from "clsx";
import type { ConfirmModalProps } from "./types";
import Dialog from "@/components/Dialog";
import Typography from "@/ui/Typography";
import Button from "@/ui/Button";
import s from "./ConfirmModal.module.css";

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  description,
  primaryButtonLabel = "Save",
  secondaryButtonLabel = "Cancel",
  isSubmitButtonDisabled = false,
  isSubmitButtonLoading = false,
  onSubmit,
  className,
  ...rest
}) => {
  return (
    <Dialog
      {...rest}
      title={title}
      // hasOverflowing={false}
      className={clsx(s.wrap, className)}
    >
      <div className={s["description-wrap"]}>
        <Typography className={clsx(s.description)} component="p" variant="sm">
          {description}
        </Typography>
      </div>
      <footer className={s.footer}>
        <DialogClose asChild>
          <Button className={clsx(s.cta, s.secondary)} variant="ghost" size="sm">
            {secondaryButtonLabel}
          </Button>
        </DialogClose>
        <Button
          className={s.cta}
          type="submit"
          variant="primary"
          size="sm"
          disabled={isSubmitButtonDisabled}
          loading={isSubmitButtonLoading}
          onClick={onSubmit}
        >
          {primaryButtonLabel}
        </Button>
      </footer>
    </Dialog>
  );
};

export default memo(ConfirmModal);
