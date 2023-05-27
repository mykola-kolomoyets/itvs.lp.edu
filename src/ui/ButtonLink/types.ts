import type { RequireOnlyOne, FCProps } from "@/types";
import type {
  ButtonIconSideType,
  ButtonSizeType,
  ButtonVariantType,
} from "@/ui/Button";

export type ButtonLinkTypes<T> = FCProps<{
  iconChild?: React.ReactNode;
  icon?: React.ReactNode;
  as?: T;
  disabled?: boolean;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  iconSide?: ButtonIconSideType;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonLinkProps<T extends React.ElementType> = RequireOnlyOne<
  ButtonLinkTypes<T>,
  "children" | "iconChild"
>;
