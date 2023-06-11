import { memo } from "react";
import Head from "next/head";
import BlockWithTitle from "@/layouts/BlockWithTitle";
import Container from "@/ui/Container";
import ArticleWithoutImage from "@/ui/ArticleWithoutImage";
import ArticleWithImage from "@/ui/ArticleWithImage";
import s from "./Home.module.css";
import type { HomePageProps } from "./types";

const Home: React.FC<HomePageProps> = ({
  latestNews,
  performanceNews,
  polytechnicNews,
  topNews,
}) => {
  return (
    <>
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
          {topNews?.map((article) => {
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
            {latestNews?.slice(0, 2).map((article) => {
              return <ArticleWithImage key={article.id} {...article} />;
            })}
          </div>
          <div className={s["others"]}>
            {latestNews?.slice(2).map((article) => {
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
              {polytechnicNews?.map((article) => {
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
            {performanceNews?.map((article) => {
              return <ArticleWithImage key={article.id} {...article} />;
            })}
          </div>
        </BlockWithTitle>
      </Container>
    </>
  );
};

export default memo(Home);
