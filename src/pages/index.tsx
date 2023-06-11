import type { GetServerSideProps, NextPage } from "next";
import Home, { type HomePageProps } from "@/modules/Home";
import type { Article } from "@prisma/client";
import { appRouter } from "@/server/api/root";

const HomePage: NextPage<HomePageProps> = (props) => {
  return <Home {...props} />;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  const trpc = appRouter.createCaller(context as never);

  const allNews = await trpc.news.getAll();

  const topNews = allNews.slice(0, 4).map((article) => {
    return JSON.parse(JSON.stringify(article)) as Article;
  });
  const latestNews = allNews.slice(0, 5).map((article) => {
    return JSON.parse(JSON.stringify(article)) as Article;
  });
  const polytechnicNews = allNews.slice(0, 6).map((article) => {
    return JSON.parse(JSON.stringify(article)) as Article;
  });
  const performanceNews = allNews.slice(0, 3).map((article) => {
    return JSON.parse(JSON.stringify(article)) as Article;
  });

  console.log(polytechnicNews);

  return {
    props: {
      topNews,
      latestNews,
      polytechnicNews,
      performanceNews,
    },
  };
};
