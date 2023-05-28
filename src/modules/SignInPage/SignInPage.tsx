import { memo, useCallback } from "react";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { PATHS } from "@/constants";
import MainLayout from "@/layouts/MainLayout";
import Dialog from "@/components/Dialog";
import Container from "@/ui/Container";
import Button from "@/ui/Button";
import Typography from "@/ui/Typography";
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

          <div className={s["agreement-wrap"]}>
            <Typography variant="sm">
              Реєструючись, ви погоджуєтесь з
            </Typography>
            <Dialog
              title="Згода користування сайтом"
              triggerElement={
                <Button
                  className={s["agreement-btn"]}
                  variant="ghost"
                  size="sm"
                >
                  Згодою користування сайтом
                </Button>
              }
            >
              <ol className={s["agreement-list"]}>
                <li className={s["agreement-item"]}>
                  <Typography className={s["agreement-title"]} variant="base">
                    Реєстрація та надання даних
                  </Typography>
                  <ol className={s["agreement-sublist"]}>
                    <li>
                      <Typography variant="sm">
                        При реєстрації в Застосунку, ви погоджуєтесь надати
                        необхідну та достовірну інформацію про себе.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="sm">
                        Адміністратор має право мати доступ до інформації, яку
                        ви надаєте під час реєстрації, включаючи, але не
                        обмежуючись, особисті дані та контактну інформацію
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="sm">
                        Ви погоджуєтесь, що ми можемо використовувати надані
                        вами дані для надання послуг, включаючи публікацію ваших
                        даних на сайті та покращення функціональності
                        Застосунку.
                      </Typography>
                    </li>
                  </ol>
                </li>
                <li className={s["agreement-item"]}>
                  <Typography className={s["agreement-title"]} variant="base">
                    Редагування інформації та обмеження доступу
                  </Typography>
                  <ol className={s["agreement-sublist"]}>
                    <li>
                      <Typography variant="sm">
                        Адміністратор має право редагувати інформацію, яку ви
                        надали при реєстрації, з метою підтримки актуальності та
                        достовірності даних
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="sm">
                        У випадку редагування інформації, Адміністратор може
                        обмежити доступ до певного функціоналу Застосунку, якщо
                        він вважає це необхідним для забезпечення безпеки,
                        виконання правил використання або інших об`єктивних
                        обставин
                      </Typography>
                    </li>
                  </ol>
                </li>
                <li className={s["agreement-item"]}>
                  <Typography className={s["agreement-title"]} variant="base">
                    Права та обов`язки Адміністратора
                  </Typography>
                  <ol className={s["agreement-sublist"]}>
                    <li>
                      <Typography variant="sm">
                        Ви маєте право використовувати Застосунок у
                        відповідності до його призначення та функціональності,
                        яка доступна вашій ролі.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="sm">
                        Ви зобов`язуєтесь надавати достовірну та актуальну
                        інформацію про себе при реєстрації та оновлювати її в
                        разі змін.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="sm">
                        Ви несете відповідальність за збереження
                        конфіденційності свого облікового запису та не
                        передавати свої облікові дані третім особам без дозволу
                        Адміністратора.
                      </Typography>
                    </li>
                  </ol>
                </li>
              </ol>
            </Dialog>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default memo(SignInPage);
