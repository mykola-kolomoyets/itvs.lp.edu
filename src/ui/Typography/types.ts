import type { FCProps } from "@/types";

export type TypographyComponent =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type TypographyVariant =
  | "2xs"
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "xxl"
  | "3xl";

export type TypographyProps = FCProps<{
  component?: TypographyComponent;
  variant?: TypographyVariant;
}>;
