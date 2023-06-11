import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { RiLinkM } from "react-icons/ri";
import clsx from "clsx";
import type { TypographyVariant } from "@/ui/Typography";
import type { ArticleProps } from "./types";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useNotificationStore } from "@/components/Notification/store/useNotificationStore";
import { APP_HOSTNAME, MEDIA_ICON_SIZE } from "./constants";
import { ICON_L_SIZE, ICON_M_SIZE, MOCK_ARTICLE_IMAGE } from "@/constants";
import Markdown from "@/components/Markdown";
import Container from "@/ui/Container";
import Typography from "@/ui/Typography";
import FormattedDate from "@/ui/FormattedDate";
import Button from "@/ui/Button";
import s from "./Article.module.css";

const Article: React.FC<ArticleProps> = ({ article }) => {
  const { actions: notificationActions } = useNotificationStore();
  const [isRendered, setIsRendered] = useState(false);
  const isTablet = useMediaQuery("(max-width: 1000px)");

  const titlesVariant: TypographyVariant = isTablet ? "xxl" : "3xl";

  // TODO: UTILS
  const getMetaTitle = useCallback(() => {
    return `ІТВС | ${article?.title}`;
  }, [article?.title]);

  const getMetaPageUrl = useCallback(() => {
    return `${APP_HOSTNAME}/news/${article?.id}`;
  }, [article?.id]);

  const getMetaImage = () => {
    return MOCK_ARTICLE_IMAGE;
  };

  const copyToClipboardClickHandler = useCallback(async () => {
    await navigator.clipboard.writeText(window.location.href);
    notificationActions.openNotification("Посилання скопійовано");
  }, [notificationActions]);

  const shareJSX = useMemo(() => {
    return (
      <aside className={s["share-wrap"]}>
        <h5 className="visually-hidden">Share this article</h5>
        <div className={s.share}>
          <TwitterShareButton
            className={clsx(s["share-btn"], "focus-primary", s.twitter)}
            url={getMetaPageUrl()}
            title={getMetaTitle()}
          >
            <TwitterIcon size={MEDIA_ICON_SIZE} />
          </TwitterShareButton>
          <FacebookShareButton
            className={clsx(s["share-btn"], "focus-primary", s.facebook)}
            url={getMetaPageUrl()}
            title={getMetaTitle()}
            hashtag="#itvs"
          >
            <FacebookIcon size={MEDIA_ICON_SIZE} />
          </FacebookShareButton>
          <TelegramShareButton
            className={clsx(s["share-btn"], "focus-primary", s.telegram)}
            url={getMetaPageUrl()}
            title={getMetaTitle()}
          >
            <TelegramIcon size={ICON_L_SIZE} />
          </TelegramShareButton>
          <Button
            className={clsx(s["share-btn"], s.copy)}
            variant="ghost"
            iconChild={<RiLinkM size={ICON_M_SIZE} />}
            onClick={() => {
              void copyToClipboardClickHandler();
            }}
          />
        </div>
      </aside>
    );
  }, [copyToClipboardClickHandler, getMetaPageUrl, getMetaTitle]);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  console.log(article);

  return (
    <>
      <Head>
        <title>ІТВС | {article?.title}</title>
        <link rel="icon" href="/favicon. ico" />
        <meta name="robots" content="all" />
        <meta name="description" content={article?.title} />
        <meta property="og:image" content={getMetaImage()} />
        <meta property="og:title" content={getMetaTitle()} />
        <meta
          property="og:description"
          content="Кафедра Інформаційних Технологій Видавничої Справи"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={APP_HOSTNAME} />
        <meta name="twitter:title" content={getMetaTitle()} />
        <meta
          name="twitter:description"
          content="Кафедра Інформаційних Технологій Видавничої Справи"
        />
        <meta name="twitter:image" content={getMetaImage()} />
        <meta name="twitter:url" content={getMetaPageUrl()} />
      </Head>
      <Container className={s.container}>
        {isRendered && !isTablet ? shareJSX : null}
        <article className={s["article-wrap"]}>
          <div className={s["title-wrap"]}>
            <Typography
              className={s.title}
              variant={titlesVariant}
              component="h1"
            >
              {article?.title}
            </Typography>
            {isRendered && article?.createdAt ? (
              <FormattedDate date={new Date(article.createdAt)} />
            ) : null}
            {isRendered && isTablet ? shareJSX : null}
          </div>
          <section className={s.content}>
            <Image
              className={s.image}
              src={article?.posterUrl || MOCK_ARTICLE_IMAGE}
              width={800}
              height={381}
              alt={article?.title}
            />
            <Markdown>{article?.content}</Markdown>
          </section>
        </article>
      </Container>
    </>
  );
};

export default memo(Article);
