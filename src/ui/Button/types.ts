import type { RequireOnlyOne, FCProps } from "@/types";
import type { IconIdType } from "@/ui/Icon";

export type ButtonVariantType = "primary" | "ghost";

export type ButtonSizeType = "sm" | "md";

export type ButtonIconSideType = "left" | "right";

export type ButtonTypes = FCProps<{
  iconChild?: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  loading?: boolean;
  iconSide?: ButtonIconSideType;
  icon?: IconIdType;
  iconClassName?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = RequireOnlyOne<ButtonTypes, "children" | "iconChild">;
