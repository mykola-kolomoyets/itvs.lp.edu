import type { Article } from "@prisma/client";
import type { WithClassName } from "@/types";

export type ArticleRowProps = WithClassName<{
  article: Omit<Article, "authorId" | "content">;
}>;
