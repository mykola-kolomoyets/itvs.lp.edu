import type { NextPage, GetServerSideProps } from "next";
import type { Article } from "@prisma/client";
import { appRouter } from "@/server/api/root";
import News from "@/modules/News";

type NewsPageProps = {
  news: Article[];
};

const NewsPage: NextPage<NewsPageProps> = ({ news }) => {
  return <News news={news} />;
};

export default NewsPage;

export const getServerSideProps: GetServerSideProps<NewsPageProps> = async (
  context
) => {
  const trpc = appRouter.createCaller(context as never);

  const newsFirstPage = await trpc.news.getList();

  return {
    props: {
      news: newsFirstPage.map((newsItem) => {
        return JSON.parse(JSON.stringify(newsItem)) as Article;
      }),
    },
  };
};
