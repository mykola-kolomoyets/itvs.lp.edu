import { memo, useCallback } from "react";
import clsx from "clsx";
import Image from "next/image";
import type { ArticleRowProps } from "./types";
import s from "./ArticleRow.module.css";
import { PATHS, MOCK_ARTICLE_IMAGE, ICON_L_SIZE } from "@/constants";
import Button from "@/ui/Button";
import FormattedDate from "@/ui/FormattedDate";
import Typography from "@/ui/Typography";
import Link from "next/link";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { api } from "@/utils/api";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useNotificationStore } from "@/components/Notification/store/useNotificationStore";

const ArticleRow: React.FC<ArticleRowProps> = ({ className, article }) => {
  const { actions: notificationActions } = useNotificationStore();
  const apiContext = api.useContext();
  const { mutateAsync: deleteArticle, isLoading } = api.news.delete.useMutation(
    {
      async onSuccess() {
        await apiContext.invalidate();
        notificationActions.openNotification("Статтю успішно видалено");
      },
    }
  );

  const deleteArticleHandler = useCallback(async () => {
    await deleteArticle({ id: article.id });
  }, [article.id, deleteArticle]);

  return (
    <>
      <div key={article.id} className={clsx(s.wrap, className)}>
        <Link href={`${PATHS.NEWS}/${article.id}`} legacyBehavior>
          <button className={clsx(s.left, "focus-primary")}>
            <div className={s["image-wrap"]}>
              <Image
                className={s.image}
                src={article.posterUrl ?? MOCK_ARTICLE_IMAGE}
                width={123}
                height={114}
                alt={article.title}
              />
            </div>
            <div className={s.content}>
              <FormattedDate className={s.date} date={article.createdAt} />
              <Typography className={s.title} variant="lg" component="h2">
                {article.title}
              </Typography>
            </div>
          </button>
        </Link>

        <ConfirmModal
          title="Видалити статтю?"
          description="Ви впевнені, що хочете видалити цю статтю?"
          triggerElement={
            <Button
              className={s["remove-btn"]}
              variant="ghost"
              size="md"
              type="button"
              iconChild={
                <RiDeleteBin2Fill size={ICON_L_SIZE} className={s.icon} />
              }
              loading={isLoading}
            />
          }
          isSubmitButtonLoading={isLoading}
          primaryButtonLabel="Видалити"
          secondaryButtonLabel="Скасувати"
          onSubmit={() => {
            void deleteArticleHandler();
          }}
        />
      </div>
    </>
  );
};

export default memo(ArticleRow);
