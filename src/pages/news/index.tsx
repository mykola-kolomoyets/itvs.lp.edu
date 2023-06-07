import type { NextPage, GetServerSideProps } from "next";
import News from "@/modules/News";
import type { ArticleWithImageItem } from "@/ui/ArticleWithImage";
import { appRouter } from "@/server/api/root";

type NewsPageProps = {
  news: ArticleWithImageItem[];
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
      news: newsFirstPage,
    },
  };
};
