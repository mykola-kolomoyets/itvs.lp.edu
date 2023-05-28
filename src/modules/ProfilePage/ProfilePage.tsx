import { memo, useCallback, useEffect } from "react";
import Head from "next/head";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { RiLogoutBoxRLine } from "react-icons/ri";
import {
  AVATAR_BASE_SIZE,
  DEFAULT_USER_NAME,
  EMPTY_AVATAR_URL,
  ICON_M_SIZE,
  PATHS,
  USER_ROLES,
} from "@/constants";
import { ROLE_LABELS } from "./constants";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/ui/Button";
import Container from "@/ui/Container";
import Typography from "@/ui/Typography";
import s from "./ProfilePage.module.css";

const ProfilePage: React.FC = () => {
  const { data: sessionData, status: authStatus } = useSession();
  const router = useRouter();

  const signOutHandler = useCallback(() => {
    void signOut();
  }, []);

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      void router.replace(PATHS.MAIN);
    }
  }, [authStatus, router, sessionData]);

  return (
    <MainLayout>
      <Head>
        <title>ІТВС | Особистий кабінет</title>
        <meta name="description" content="ІТВС" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={s.wrap}>
        <Typography className={s["page-title"]} variant="3xl" component="h1">
          Особистий кабінет
        </Typography>

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
              <Typography className={s.name} variant="xxl">
                {sessionData?.user.name ?? sessionData?.user.email}
              </Typography>
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
        <section className={s["created-news-wrap"]}>
          <div className={s.top}>
            <Typography className={s.title} variant="xxl">
              Створенні статті
            </Typography>
            <Button size="sm" disabled>
              Створити статтю
            </Button>
          </div>
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
        </section>
      </Container>
    </MainLayout>
  );
};

export default memo(ProfilePage);
