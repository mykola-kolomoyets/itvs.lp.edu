import { memo } from "react";
import type { NewsProps } from "./types";
import ArticleWithImage from "@/ui/ArticleWithImage";
import Typography from "@/ui/Typography";
import Container from "@/ui/Container";
import s from "./News.module.css";

const News: React.FC<NewsProps> = ({ news }) => {
  if (!news?.length) {
    return null;
  }

  return (
    <Container className={s.wrap}>
      <div className={s.top}>
        <Typography className={s.title} variant="3xl">
          Новини
        </Typography>
      </div>
      <section className={s.content}>
        {news.map((item) => (
          <ArticleWithImage key={item.id} {...item} />
        ))}
      </section>
    </Container>
  );
};

export default memo(News);
