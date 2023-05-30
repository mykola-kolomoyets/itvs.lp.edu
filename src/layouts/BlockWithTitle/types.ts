import type { Url } from "next/dist/shared/lib/router/router";
import type { FCProps } from "@/types";

export type BlockWithTitleProps = FCProps<{
  title: string;
  ctaLabel?: string;
  titleClasses?: string;
  contentClasses?: string;
  ctaClasses?: string;
  ctaHref?: Url;
  onCTAClick?: () => void;
}>;
