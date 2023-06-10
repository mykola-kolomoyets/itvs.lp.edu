import type { ButtonVariantType } from "@/ui/Button";
import type { DialogProps } from "@/components/Dialog";

export type ConfirmModalProps = {
  /**
        Title of modal
    */
  title: string;
  /**
        Description of modal
    */
  description: string;
  /**
        Type of the button
    */
  buttonVariant?: ButtonVariantType;
  /**
        Is submit button disabled
    */
  isSubmitButtonDisabled?: boolean;
  /**
        Is submit button lading
    */
  isSubmitButtonLoading?: boolean;
  /**
        Primary button label
    */
  primaryButtonLabel?: string;
  /**
        Secondary button label
    */
  secondaryButtonLabel?: string;
  /**
        On form submit
    */
  onSubmit?: () => void;
} & Omit<DialogProps, "title" | "children" | "hasOverflowing">;
