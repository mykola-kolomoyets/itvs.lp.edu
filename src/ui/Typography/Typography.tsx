import { memo } from "react";
import { Manrope } from "next/font/google";
import clsx from "clsx";
import type { TypographyProps } from "./types";
import s from "./Typography.module.css";

const font = Manrope({
  weight: ["400", "500", "700", "800"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

const Typography: React.FC<TypographyProps> = ({
  children,
  component = "p",
  variant = "base",
  className,
}) => {
  const Component = component as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={clsx(s[`variant-${variant}`], font.className, className)}
    >
      {children}
    </Component>
  );
};

export default memo(Typography);
