import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import type { ArticleWithImageProps } from "./types";
import { formatDate } from "@/utils/formatDate";
import Typography from "@/ui/Typography";
import s from "./ArticleWithImage.module.css";

const ArticleWithImage: React.FC<ArticleWithImageProps> = ({
  className,
  id,
  title,
  imageUrl,
  createdAt,
}) => {
  return (
    <Link className={clsx(s.wrap, "focus-primary")} href={`/news/${id}`}>
      <article className={clsx(s.inner, className)}>
        <div className={s["image-wrap"]}>
          <Image
            className={s.image}
            src={imageUrl}
            width={592}
            height={236}
            alt={title}
          />
        </div>
        <div className={s.content}>
          <Typography className={s.title} variant="xl" component="h3">
            {title}
          </Typography>
          <div className={s["date-wrap"]}>
            <Image
              className={s.calendar}
              src="/images/calendar.webp"
              width={16}
              height={16}
              alt={`Article - ${title}`}
            />

            <Typography className={s.date} variant="xs" component="span">
              {formatDate(createdAt)}
            </Typography>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default memo(ArticleWithImage);
