import { memo, useMemo } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { BlockWithTitleProps } from "./types";
import Typography from "@/ui/Typography";
import s from "./BlockWithTitle.module.css";

const BlockWithTitle: React.FC<BlockWithTitleProps> = ({
  className,
  children,
  titleClasses,
  contentClasses,
  ctaClasses,
  title,
  ctaLabel,
  ctaHref,
  onCTAClick,
}) => {
  const isWithCTA = !!ctaLabel && (!!onCTAClick || !!ctaHref);

  const ctaJSX = useMemo(() => {
    switch (true) {
      case !isWithCTA:
      default: {
        return null;
      }
      case Boolean(ctaHref): {
        return (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          <Link href={ctaHref!} legacyBehavior>
            <a className={clsx(s.link, "link", "focus-primary")}>
              <Typography
                className={clsx(s.cta, ctaClasses)}
                variant="sm"
                component="span"
              >
                {ctaLabel}
              </Typography>
            </a>
          </Link>
        );
      }
      case Boolean(onCTAClick): {
        return (
          <span className="focus-primary" onClick={onCTAClick}>
            <Typography
              className={clsx(s.cta, ctaClasses)}
              variant="sm"
              component="span"
            >
              {ctaLabel}
            </Typography>
          </span>
        );
      }
    }
  }, [ctaClasses, ctaHref, ctaLabel, isWithCTA, onCTAClick]);

  return (
    <section className={clsx(s.wrap, className)}>
      <div className={s["title-wrap"]}>
        <Typography
          className={clsx(s["block-title"], titleClasses)}
          variant="xxl"
          component="h2"
        >
          {title}
        </Typography>
        {isWithCTA ? ctaJSX : null}
      </div>
      <div className={clsx(s["block-content"], contentClasses)}>{children}</div>
    </section>
  );
};

export default memo(BlockWithTitle);
