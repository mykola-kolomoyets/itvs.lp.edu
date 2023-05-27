import type { RequireOnlyOne, FCProps } from "@/types";
import type { IconIdType } from "@/ui/Icon";
import type {
  ButtonIconSideType,
  ButtonSizeType,
  ButtonVariantType,
} from "@/ui/Button";

export type ButtonLinkTypes<T> = FCProps<{
  /**
            The icon instead of children.
        */
  iconChild?: React.ReactNode;
  /**
            The component of the ButtonLink.
        */
  as?: T;
  /**
            If true, the component is disabled.
        */
  disabled?: boolean;
  /**
            The variant to use.
        */
  variant?: ButtonVariantType;
  /**
            The size of the component.
        */
  size?: ButtonSizeType;
  /**
            The icon side of the component.
        */
  iconSide?: ButtonIconSideType;
  /**
            The icon of the component.
        */
  icon?: IconIdType;
  /**
            Additional classes of the icon.
        */
  iconClassName?: string;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonLinkProps<T extends React.ElementType> = RequireOnlyOne<
  ButtonLinkTypes<T>,
  "children" | "iconChild"
>;
