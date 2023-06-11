import { memo } from "react";
import Link from "next/link";
import { RiEdit2Line } from "react-icons/ri";
import clsx from "clsx";
import type { ArticlesListProps } from "./types";
import { api } from "@/utils/api";
import { ICON_M_SIZE, PATHS } from "@/constants";
import ArticleRow from "@/components/ArticleRow";
import Typography from "@/ui/Typography";
import Button from "@/ui/Button";
import Loader from "@/ui/Loader";
import s from "./ArticlesList.module.css";

const ArticlesList: React.FC<ArticlesListProps> = ({ className }) => {
  const { data: articles, isLoading } = api.news.getAll.useQuery();

  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s.top}>
        <Typography className={s.title} variant="xxl">
          Статті
        </Typography>

        <Link href={PATHS.CREATE_NEWS} legacyBehavior>
          <Button
            className={s["create-cta"]}
            variant="primary"
            size="sm"
            iconSide="left"
            icon={<RiEdit2Line className={s.icon} size={ICON_M_SIZE} />}
          >
            Створити статтю
          </Button>
        </Link>
      </div>
      <div className={s.content}>
        {isLoading ? (
          <div className={s["loader-wrap"]}>
            <Loader size={70} />
          </div>
        ) : articles?.length ? (
          <>
            {articles.map((article) => {
              return (
                <ArticleRow
                  className={s.article}
                  key={article.id}
                  article={article}
                />
              );
            })}
          </>
        ) : (
          <div>sdfdsfsdfdsfsdf</div>
        )}
      </div>
    </div>
  );
};

export default memo(ArticlesList);
