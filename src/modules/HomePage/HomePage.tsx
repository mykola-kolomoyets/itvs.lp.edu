import { memo } from "react";
import Head from "next/head";
import {
  MOCK_LATEST_NEWS,
  MOCK_PARTNERS_NEWS,
  MOCK_URGENT_ARTICLES,
} from "./constants";
import MainLayout from "@/layouts/MainLayout";
import BlockWithTitle from "@/layouts/BlockWithTitle";
import Container from "@/ui/Container";
import ArticleWithoutImage from "@/ui/ArticleWithoutImage";
import ArticleWithImage from "@/ui/ArticleWithImage";
import s from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>ІТВС | Головна</title>
        <meta name="description" content="ІТВС" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <BlockWithTitle
          className={s["urgent-news"]}
          contentClasses={s["urgent-grid"]}
          title="Вступ 2023"
          ctaLabel="Всі новини"
          ctaHref="/news"
        >
          {MOCK_URGENT_ARTICLES.map((article) => {
            return (
              <ArticleWithoutImage
                className={s["urgent-article"]}
                key={article.id}
                {...article}
              />
            );
          })}
        </BlockWithTitle>
        <BlockWithTitle
          className={s["latest-news"]}
          title="Останні новини"
          ctaLabel="Всі новини"
          ctaHref="/news"
        >
          <div className={s["first-row"]}>
            {MOCK_LATEST_NEWS.slice(0, 2).map((article) => {
              return <ArticleWithImage key={article.id} {...article} />;
            })}
          </div>
          <div className={s["others"]}>
            {MOCK_LATEST_NEWS.slice(2).map((article) => {
              return <ArticleWithImage key={article.id} {...article} />;
            })}
          </div>
        </BlockWithTitle>
      </Container>
      <div className={s["lpnu-container"]}>
        <Container>
          <BlockWithTitle
            className={s["lpnu-news"]}
            title="Новини політехніки"
            ctaLabel="Всі новини"
            ctaHref="/news"
            titleClasses={s["light-text"]}
            ctaClasses={s["light-text"]}
          >
            <div className={s["lpnu-wrap"]}>
              {MOCK_LATEST_NEWS.slice(2).map((article) => {
                return <ArticleWithImage key={article.id} {...article} />;
              })}
            </div>
          </BlockWithTitle>
        </Container>
      </div>
      <Container>
        <BlockWithTitle
          className={s["partners-news"]}
          title="Заходи та події від партнерів"
          ctaLabel="Всі новини"
          ctaHref="/news"
        >
          <div className={s["partners-wrap"]}>
            {MOCK_PARTNERS_NEWS.map((article) => {
              return <ArticleWithImage key={article.id} {...article} />;
            })}
          </div>
        </BlockWithTitle>
      </Container>
    </MainLayout>
  );
};

export default memo(HomePage);
