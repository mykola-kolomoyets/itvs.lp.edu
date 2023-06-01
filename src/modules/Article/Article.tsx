import { memo } from "react";
import Head from "next/head";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import type { ArticleProps } from "./types";
import { ICON_M_SIZE } from "@/constants";
import { MOCK_ARTICLE_IMAGE } from "@/modules/Home/constants";
import { APP_HOSTNAME } from "./constants";
import MainLayout from "@/layouts/MainLayout";
import s from "./Article.module.css";

const Article: React.FC<ArticleProps> = ({ article }) => {
  // TODO: UTILS
  const getMetaTitle = () => {
    return `ІТВС | ${article.title}`;
  };

  const getMetaPageUrl = () => {
    return `${APP_HOSTNAME}/news/${article.id}`;
  };

  const getMetaImage = () => {
    return MOCK_ARTICLE_IMAGE;
  };

  return (
    <>
      <Head>
        <title>ІТВС | {article.title}</title>
        <link rel="icon" href="/favicon. ico" />
        <meta name="robots" content="all" />
        <meta name="description" content={article.title} />
        <meta property="og:image" content={getMetaImage()} />
        <meta property="og:title" content={getMetaTitle()} />
        <meta
          property="og:description"
          content="Кафедра Інформаційних технологій Видавничої Справи"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={APP_HOSTNAME} />
        <meta name="twitter:title" content={getMetaTitle()} />
        <meta
          name="twitter:description"
          content="Кафедра Інформаційних технологій Видавничої Справи"
        />
        <meta name="twitter:image" content={getMetaImage()} />
        <meta name="twitter:url" content={getMetaPageUrl()} />
      </Head>
      <MainLayout>
        <div>{article.title}</div>
        <aside>
          <h5 className="visually-hidden">Share this article</h5>
          <div className={s.share}>
            <TwitterShareButton url={getMetaPageUrl()} title={getMetaTitle()}>
              <button>
                <TwitterIcon size={ICON_M_SIZE} />
              </button>
            </TwitterShareButton>
            <FacebookShareButton
              url={getMetaPageUrl()}
              title={getMetaTitle()}
              hashtag="#itvs"
            >
              <button>
                <FacebookIcon size={ICON_M_SIZE} />
              </button>
            </FacebookShareButton>
            <TelegramShareButton url={getMetaPageUrl()} title={getMetaTitle()}>
              <button>
                <TelegramIcon size={ICON_M_SIZE} />
              </button>
            </TelegramShareButton>
          </div>
        </aside>
      </MainLayout>
    </>
  );
};

export default memo(Article);