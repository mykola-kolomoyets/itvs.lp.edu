import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ArticleItem } from "@/types";
import NewsItemPage from "@/modules/NewsItemPage";

const NewsItem: NextPage<ArticleItem> = (articleProps) => {
  return <NewsItemPage article={articleProps} />;
};

export const getStaticProps: GetStaticProps<ArticleItem> = ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      id,
      title: "Історія створення кафедри. Основні партнери",
      createdAt: "2023-05-15T00:00:00.000Z",
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
