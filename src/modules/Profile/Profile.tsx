import { memo, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { RiEdit2Line, RiLogoutBoxRLine } from "react-icons/ri";
import type { Article } from "@prisma/client";
import { api } from "@/utils/api";
import {
  ADMIN_PATHS,
  AVATAR_BASE_SIZE,
  DEFAULT_USER_NAME,
  EMPTY_AVATAR_URL,
  ICON_M_SIZE,
  PATHS,
  USER_ROLES,
} from "@/constants";
import { ROLE_LABELS } from "./constants";
import Typography from "@/ui/Typography";
import Container from "@/ui/Container";
import Button from "@/ui/Button";
import ArticleRow from "@/components/ArticleRow";
import s from "./Profile.module.css";

const Profile: React.FC<{ myArticles: Article[] }> = ({ myArticles }) => {
  const { data: sessionData, status: authStatus } = useSession();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const { data: myArticlesList } = api.news.getMy.useQuery(undefined, {
    enabled: isMounted,
  });

  const articlesToRender = isMounted ? myArticlesList : myArticles;

  const signOutHandler = useCallback(() => {
    void signOut();
  }, []);

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      void router.replace(PATHS.MAIN);
    }
  }, [authStatus, router, sessionData]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>ІТВС | Особистий кабінет</title>
        <meta name="description" content="ІТВС" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={s.wrap}>
        <div className={s.top}>
          <Typography className={s["page-title"]} variant="3xl" component="h1">
            Особистий кабінет
          </Typography>

          {sessionData?.user.role === USER_ROLES.ADMIN ? (
            <Link href={ADMIN_PATHS.PANEL} legacyBehavior>
              <Button className={s["admin-cta"]} variant="primary" size="sm">
                Панель адміністрування
              </Button>
            </Link>
          ) : null}
        </div>

        <section className={s["profile-wrap"]}>
          <div className={s.left}>
            <Image
              className={s.avatar}
              src={sessionData?.user?.image ?? EMPTY_AVATAR_URL}
              width={AVATAR_BASE_SIZE}
              height={AVATAR_BASE_SIZE}
              alt={sessionData?.user.name ?? DEFAULT_USER_NAME}
            />
            <div className={s.info}>
              <div className={s["name-wrap"]}>
                <Typography className={s.name} variant="xxl" component="h2">
                  {sessionData?.user.name ?? sessionData?.user.email}
                </Typography>
                <Typography className={s.email} variant="xs">
                  {sessionData?.user.email}
                </Typography>
              </div>
              <Typography className={s.role} variant="sm">
                {ROLE_LABELS[sessionData?.user.role ?? USER_ROLES.USER]}
              </Typography>
            </div>
          </div>
          <Button
            className={s["logout-btn"]}
            variant="primary"
            size="sm"
            onClick={signOutHandler}
            iconSide="right"
            icon={<RiLogoutBoxRLine className={s.icon} size={ICON_M_SIZE} />}
          >
            Вийти
          </Button>
        </section>
        {sessionData?.user.role !== USER_ROLES.USER ? (
          <section className={s["created-news-wrap"]}>
            <div className={s.top}>
              <Typography className={s.title} variant="xxl">
                Створенні статті
              </Typography>
              <Link href={PATHS.CREATE_NEWS} legacyBehavior>
                <Button
                  className={s["create-cta"]}
                  size="sm"
                  iconSide="left"
                  icon={<RiEdit2Line className={s.icon} size={ICON_M_SIZE} />}
                >
                  Створити статтю
                </Button>
              </Link>
            </div>
            <div className={s["articles-wrap"]}>
              {articlesToRender?.length ? (
                <div className={s["articles-inner"]}>
                  {articlesToRender.map((article) => {
                    return (
                      <ArticleRow
                        className={s.article}
                        key={article.id}
                        article={article}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className={s.empty}>
                  <Image
                    src="/images/article.webp"
                    width={40}
                    height={40}
                    alt="No articles"
                  />
                  <Typography className={s.text} variant="xxl">
                    Ви ще не створили статей
                  </Typography>
                </div>
              )}
            </div>
          </section>
        ) : null}
      </Container>
    </>
  );
};

export default memo(Profile);
