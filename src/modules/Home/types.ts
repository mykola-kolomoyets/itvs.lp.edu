import type { Article } from "@prisma/client";

export type HomePageProps = {
  topNews: Article[];
  latestNews: Article[];
  polytechnicNews: Article[];
  performanceNews: Article[];
};
