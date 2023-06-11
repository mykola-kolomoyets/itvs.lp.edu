import type { GetServerSideProps, NextPage } from "next";
import type { Article as ArticleType } from "@prisma/client";
import { appRouter } from "@/server/api/root";
import Article from "@/modules/Article";

const NewsItem: NextPage<{ article: ArticleType }> = ({ article }) => {
  return <Article article={article} />;
};

export const getServerSideProps: GetServerSideProps<{
  article: ArticleType;
}> = async (context) => {
  const trpc = appRouter.createCaller(context as never);
  const { id } = context.params as { id: string };

  if (!id) {
    return {
      notFound: true,
    };
  }

  const article = await trpc.news.getItem({ id });

  console.log("article fetched serversie: ", article);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: JSON.parse(JSON.stringify(article)) as ArticleType,
    },
  };
};
export default NewsItem;
