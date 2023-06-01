import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ArticleItem } from "@/types";
import Article from "@/modules/Article";

const NewsItem: NextPage<ArticleItem> = (articleProps) => {
  return <Article article={articleProps} />;
};

export const getStaticProps: GetStaticProps<ArticleItem> = ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      id,
      title: "Історія створення кафедри. Основні партнери",
      createdAt: new Date().toISOString(),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: new Array(10).fill("").map((_, index) => {
      return {
        params: {
          id: `${index}`,
        },
      };
    }),
    fallback: true,
  };
};

export default NewsItem;
