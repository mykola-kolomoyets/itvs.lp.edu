import type { WithClassName } from "@/types";

export type ArticleWithoutImageItem = {
  id: string;
  title: string;
  createdAt: Date | string;
};

export type ArticleWithoutImageProps = WithClassName<ArticleWithoutImageItem>;
