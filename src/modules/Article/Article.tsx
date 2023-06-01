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
import { MOCK_ARTICLE_IMAGE } from "@/modules/Home/constants";
import { APP_HOSTNAME, MEDIA_ICON_SIZE } from "./constants";
import { ICON_L_SIZE, ICON_M_SIZE } from "@/constants";
import MainLayout from "@/layouts/MainLayout";
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
    return `ІТВС | ${article.title}`;
  }, [article.title]);

  const getMetaPageUrl = useCallback(() => {
    return `${APP_HOSTNAME}/news/${article.id}`;
  }, [article.id]);

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
        <Container className={s.container}>
          {isRendered && !isTablet ? shareJSX : null}

          <article className={s["article-wrap"]}>
            <div className={s["title-wrap"]}>
              <Typography
                className={s.title}
                variant={titlesVariant}
                component="h1"
              >
                {article.title}
              </Typography>
              {isRendered ? (
                <FormattedDate date={new Date(article.createdAt)} />
              ) : null}
              {isRendered && isTablet ? shareJSX : null}
            </div>
            <section className={s.content}>
              <Image
                className={s.image}
                src={MOCK_ARTICLE_IMAGE}
                width={800}
                height={381}
                alt={article.title}
              />
              <div className={s["paragraph-wrap"]}>
                <Typography className={s.paragraph} variant="lg" component="p">
                  У 1998 році на кафедрі “Автоматизовані системи управління”
                  (АСУ) розпочато підготовку бакалаврів базового напрямку „Легка
                  промисловість”, який в 2001 р. був перейменований на
                  „Видавничо-поліграфічну справу” (ВПС, шифр 051501). Щорічно
                  набір на перші курси стаціонарної форми навчання складав одну
                  група бюджетного та комерційного контингенту. У 2002 р. на
                  кафедрі здійснено перший випуск бакалаврів за напрямком
                  „Видавничо-поліграфічна справа”, які в 2002/2003 н. р.
                  продовжили навчання за спеціальністю „Комп’ютерні технології
                  та системи видавничо-поліграфічних виробництв”
                </Typography>
              </div>
              <Image
                className={s.image}
                src={MOCK_ARTICLE_IMAGE}
                width={800}
                height={381}
                alt={article.title}
              />
              <div className={s["paragraph-wrap"]}>
                <Typography className={s.paragraph} variant="lg" component="p">
                  За наказом ректора Національного університету “Львівська
                  політехніка” для продовження забезпечення підготовки фахівців
                  за напрямом „Видавничо-поліграфічна справа” у 2011 році на
                  базі кафедри АСУ утворено новий структурний підрозділ –
                  кафедру “Інформаційні технології видавничої справи” (ІТВС).
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Завідувачем кафедри було призначино доктора технічних наук,
                  професор Рашкевич Юрій Михайлович. З 2015 року завудувачем
                  кафедри є доктор технічних наук, професор Пелешко Дмитро
                  Дмитрович. У 2011 році на кафедрі ІТВС відбувся перший випуск
                  спеціалістів/магістрів спеціальності КТСВПВ, а у 2012 році –
                  перший випуск бакалаврів за напрямом ВПС.
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Студенти, які обрали напрям підготовки “Видавничо-поліграфічна
                  справа”, отримують необхідні знання для додрукарської
                  підготовки поліграфічних видань, дизайну, проектування та
                  розробки мультимедійних засобів і ін.
                </Typography>
              </div>
              <div className={s["paragraph-wrap"]}>
                <Typography
                  className={s["section-title"]}
                  variant={titlesVariant}
                  component="h2"
                >
                  1. Перспективи розвитку кафедри ІТВС
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Студенти, які обрали напрям підготовки “Видавничо-поліграфічна
                  справа”, отримують необхідні знання для додрукарської
                  підготовки поліграфічних видань, дизайну, проектування та
                  розробки мультимедійних засобів і ін.
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Фахівці з видавничо-поліграфічної справи володіють необхідними
                  знаннями в області розробки рекламних та забезпечення
                  маркетингових кампаній. Сферою їх діяльності є як традиційна
                  так і оперативна поліграфія.
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Ще перебуваючи на студентській лаві, на замовлення фірм
                  майбутні випускники приймають безпосередню участь в розробці
                  індивідуальних корпоративних стилів та реалізації промоційних
                  кампаній. Інтенсивний розвиток електронного інформаційного
                  ринку дав поштовх напрямку підготовки фахівців в області
                  розробки й дизайну електронних видань та інтернет порталів,
                  мультимедійних презентацій.
                </Typography>
              </div>
              <div className={s["paragraph-wrap"]}>
                <Typography
                  className={s["section-title"]}
                  variant={titlesVariant}
                  component="h2"
                >
                  2. Перспективи розвитку кафедри ІТВС. У 2023 році
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Студенти, які обрали напрям підготовки “Видавничо-поліграфічна
                  справа”, отримують необхідні знання для додрукарської
                  підготовки поліграфічних видань, дизайну, проектування та
                  розробки мультимедійних засобів і ін.
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Фахівці з видавничо-поліграфічної справи володіють необхідними
                  знаннями в області розробки рекламних та забезпечення
                  маркетингових кампаній. Сферою їх діяльності є як традиційна
                  так і оперативна поліграфія.
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Ще перебуваючи на студентській лаві, на замовлення фірм
                  майбутні випускники приймають безпосередню участь в розробці
                  індивідуальних корпоративних стилів та реалізації промоційних
                  кампаній. Інтенсивний розвиток електронного інформаційного
                  ринку дав поштовх напрямку підготовки фахівців в області
                  розробки й дизайну електронних видань та інтернет порталів,
                  мультимедійних презентацій.
                </Typography>
              </div>
              <Image
                className={s.image}
                src={MOCK_ARTICLE_IMAGE}
                width={800}
                height={381}
                alt={article.title}
              />
              <div className={s["paragraph-wrap"]}>
                <Typography
                  className={s["section-title"]}
                  variant={titlesVariant}
                  component="h2"
                >
                  3. Перспективи розвитку кафедри ІТВС. У 2023 році
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Студенти, які обрали напрям підготовки “Видавничо-поліграфічна
                  справа”, отримують необхідні знання для додрукарської
                  підготовки поліграфічних видань, дизайну, проектування та
                  розробки мультимедійних засобів і ін.
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Фахівці з видавничо-поліграфічної справи володіють необхідними
                  знаннями в області розробки рекламних та забезпечення
                  маркетингових кампаній. Сферою їх діяльності є як традиційна
                  так і оперативна поліграфія.
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Ще перебуваючи на студентській лаві, на замовлення фірм
                  майбутні випускники приймають безпосередню участь в розробці
                  індивідуальних корпоративних стилів та реалізації промоційних
                  кампаній. Інтенсивний розвиток електронного інформаційного
                  ринку дав поштовх напрямку підготовки фахівців в області
                  розробки й дизайну електронних видань та інтернет порталів,
                  мультимедійних презентацій.
                </Typography>
                <Typography className={s.paragraph} variant="lg" component="p">
                  Невід`ємною частиною перспективного розвитку є якісне кадрове
                  забезпечення. Для забезпечення цього кафедра планує підвищення
                  кваліфікації працівників через зв’язок з виробничим компаніями
                  регіону та прийом на роботу випускників кафедри. З цією метою
                  планується поновити залучення у процес студентів старших
                  курсів на посадах стажерів з подальшим навчанням аспірантурі
                  та працевлаштуванням на кафедрі. Розвиток кафедри в напрямі
                  підготовки фахівців і підвищення їх конкурентоздатності на
                  ринку праці кафедра ІТВС полягатиме в посиленні складової
                  інформаційних технологій в навчальних планах підготовки
                  фахівців за спеціальністю “Видавництво і поліграфія”.
                  Студенти, які обрали напрям підготовки “Видавничо-поліграфічна
                  справа”, отримують необхідні знання для додрукарської
                  підготовки поліграфічних видань, дизайну, проектування та
                  розробки мультимедійних засобів і ін
                </Typography>
              </div>
            </section>
          </article>
        </Container>
      </MainLayout>
    </>
  );
};

export default memo(Article);
