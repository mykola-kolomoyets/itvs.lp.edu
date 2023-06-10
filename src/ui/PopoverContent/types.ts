import type { PopoverContentProps as RadixPopoverContentProps } from "@radix-ui/react-popover";
import type { FCProps } from "@/types";

export type PopoverContentProps = FCProps<{
  /**
        The title of the component.
    */
  title: string;
}> &
  RadixPopoverContentProps;
