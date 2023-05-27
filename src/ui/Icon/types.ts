import type { WithClassName } from "@/types";
import type { ICON_IDS } from "./constants";

export type IconSizeType = "md" | "sm" | "xs";

export type IconIdType = (typeof ICON_IDS)[number];

export type IconProps = WithClassName<{
  /**
        Id of icon.
    */
  id: IconIdType;
  /**
        The size of the component.
    */
  size?: IconSizeType;
}>;
