import { memo, useCallback } from "react";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { PATHS } from "@/constants";
import MainLayout from "@/layouts/MainLayout";
import Container from "@/ui/Container";
import Button from "@/ui/Button";
import s from "./SignInPage.module.css";

const SignInPage: React.FC = () => {
  const googleSignInHandler = useCallback(() => {
    void signIn("google", { callbackUrl: PATHS.PROFILE });
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>ІТВС | Авторизація</title>
        <meta name="description" content="ІТВС" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={s.container}>
        <div className={s.inner}>
          <Button className={s["google-btn"]} onClick={googleSignInHandler}>
            Увійти через Google
          </Button>
        </div>
      </Container>
    </MainLayout>
  );
};

export default memo(SignInPage);
