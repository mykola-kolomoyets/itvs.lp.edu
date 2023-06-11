import { getServerSession } from "next-auth";
import type { GetServerSideProps, NextPage } from "next";
import type { Article } from "@prisma/client";
import { authOptions } from "@/server/auth";
import { appRouter } from "@/server/api/root";
import { PATHS } from "@/constants";
import Profile from "@/modules/Profile";

const ProfilePage: NextPage<{
  myArticles: Article[];
}> = ({ myArticles }) => {
  return <Profile myArticles={myArticles} />;
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps<{
  myArticles: Article[];
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session?.user) {
    return {
      redirect: {
        destination: PATHS.MAIN,
        permanent: false,
      },
    };
  }

  const trpc = appRouter.createCaller({
    ...context,
    session,
  } as never);

  const myArticles = (await trpc.news.getMy()).map((article) => {
    return JSON.parse(JSON.stringify(article)) as Article;
  });

  return {
    props: {
      myArticles,
    },
  };
};
