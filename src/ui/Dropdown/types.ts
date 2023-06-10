import type {
  DropdownMenuContentProps as DefaultDropdownMenuContentProps,
  DropdownMenuItemProps as DefaultDropdownMenuItemProps,
  DropdownMenuCheckboxItemProps as DefaultDropdownMenuCheckboxItemProps,
  DropdownMenuRadioItemProps as DefaultDropdownMenuRadioItemProps,
} from "@radix-ui/react-dropdown-menu";
import type { WithClassName, FCProps } from "@/types";
import type { IconType } from "react-icons";

export type DropdownCommonItemType = WithClassName<{
  /**
        The text of the item.
    */
  text: string;
  /**
        The icon of the item.
    */
  Icon: IconType;
  /**
        The tooltip text of the item.
    */
  tooltipText?: string;
}>;

export type DropdownItemType = DropdownCommonItemType &
  DefaultDropdownMenuItemProps;

export type DropdownCheckboxItemType = DropdownCommonItemType &
  DefaultDropdownMenuCheckboxItemProps;

export type DropdownRadioItemType = DropdownCommonItemType &
  DefaultDropdownMenuRadioItemProps;

export type DropdownContentProps = FCProps<DefaultDropdownMenuContentProps>;
