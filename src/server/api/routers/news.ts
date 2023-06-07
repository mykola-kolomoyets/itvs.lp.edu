import type { ArticleWithImageItem } from "@/ui/ArticleWithImage";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { MOCK_ARTICLE_IMAGE } from "@/constants";

export const MOCK_NEWS: ArticleWithImageItem[] = new Array(12)
  .fill("")
  .map((_, index) => {
    return {
      id: index.toString(),
      title: "Створення сучасної магістерської програми",
      imageUrl: MOCK_ARTICLE_IMAGE,
      createdAt: "2023-05-15T00:00:00.000Z",
    };
  });

export const newsRouter = createTRPCRouter({
  getList: publicProcedure.query(async () => {
    return await new Promise<ArticleWithImageItem[]>((resolve) => {
      setTimeout(() => {
        resolve(MOCK_NEWS);
      }, 1000);
    });
  }),
});
