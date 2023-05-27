import type { RequireOnlyOne, FCProps } from "@/types";

export type ButtonVariantType = "primary" | "ghost";

export type ButtonSizeType = "sm" | "md";

export type ButtonIconSideType = "left" | "right";

export type ButtonTypes = FCProps<{
  iconChild?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  loading?: boolean;
  iconSide?: ButtonIconSideType;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = RequireOnlyOne<ButtonTypes, "children" | "iconChild">;
