import type { ArticleWithImageItem } from "@/ui/ArticleWithImage";
import type { ArticleWithoutImageItem } from "@/ui/ArticleWithoutImage";
import { MOCK_ARTICLE_IMAGE } from "@/constants";

export const MOCK_URGENT_ARTICLES: ArticleWithoutImageItem[] = [
  {
    id: "1",
    title: "Створення сучасної магістерської програми",
    createdAt: "2023-05-15T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Створення сучасної магістерської програми",
    createdAt: "2023-05-15T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Створення сучасної магістерської програми",
    createdAt: "2023-05-15T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Створення сучасної магістерської програми",
    createdAt: "2023-05-15T00:00:00.000Z",
  },
];

export const MOCK_LATEST_NEWS: ArticleWithImageItem[] = new Array(8)
  .fill("")
  .map((_, index) => {
    return {
      id: index.toString(),
      title: "Створення сучасної магістерської програми",
      imageUrl: MOCK_ARTICLE_IMAGE,
      createdAt: "2023-05-15T00:00:00.000Z",
    };
  });

export const MOCK_LPNU_NEWS: ArticleWithImageItem[] = new Array(6)
  .fill("")
  .map((_, index) => {
    return {
      id: index.toString(),
      title: "Створення сучасної магістерської програми",
      imageUrl: MOCK_ARTICLE_IMAGE,
      createdAt: "2023-05-15T00:00:00.000Z",
    };
  });

export const MOCK_PARTNERS_NEWS: ArticleWithImageItem[] = new Array(3)
  .fill("")
  .map((_, index) => {
    return {
      id: index.toString(),
      title: "Створення сучасної магістерської програми",
      imageUrl: MOCK_ARTICLE_IMAGE,
      createdAt: "2023-05-15T00:00:00.000Z",
    };
  });
