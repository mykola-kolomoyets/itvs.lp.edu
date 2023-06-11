import type { Article } from "@prisma/client";
import type { WithClassName } from "@/types";

export type ArticleWithImageItem = {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: Date | string;
};

export type ArticleWithImageProps = WithClassName<Article>;
