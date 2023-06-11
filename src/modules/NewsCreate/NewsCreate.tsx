import { memo, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { RiArrowRightFill, RiDeleteBin2Fill } from "react-icons/ri";
import clsx from "clsx";
import type { NewsCreateProps } from "./types";
import { useNewsNodes } from "./hooks/useNewsNodes";
import { api } from "@/utils/api";
import { ICON_M_SIZE, MOCK_ARTICLE_IMAGE, PATHS } from "@/constants";
import { useNotificationStore } from "@/components/Notification/store/useNotificationStore";
import Typography from "@/ui/Typography";
import TextField from "@/ui/TextField";
import Container from "@/ui/Container";
import TextArea from "@/ui/TextArea";
import Button from "@/ui/Button";
import AddElementDropdown from "./components/AddElementDropdown";
import s from "./NewsCreate.module.css";

const NewsCreate: React.FC<NewsCreateProps> = ({ className }) => {
  const { actions: notificationActions } = useNotificationStore();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const {
    nodes,
    appendNode,
    removeNode,
    transformNodesToMarkdownString,
    nodeValueChangeHandler,
  } = useNewsNodes();
  const { mutateAsync: createArticle, isLoading } =
    api.news.create.useMutation();

  const isPublishingEnabled = useMemo(() => {
    const isTitleValid = !!title.length;
    const areNodesValid = nodes.length && nodes.every((node) => !!node.content);

    return isTitleValid && areNodesValid;
  }, [nodes, title.length]);

  const createArticleHandler = useCallback(async () => {
    const content = transformNodesToMarkdownString();

    const newArticle = await createArticle({
      title,
      content,
      posterUrl: MOCK_ARTICLE_IMAGE,
    });

    notificationActions.openNotification(
      "Стаття успішно створена! Перехід на сторінку статті..."
    );

    await router.push(`${PATHS.NEWS}/${newArticle.id}`);
  }, [
    createArticle,
    notificationActions,
    router,
    title,
    transformNodesToMarkdownString,
  ]);

  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s.top}>
        <Container>
          <div className="flex items-center justify-between">
            <Typography className={s.title} variant="3xl" component="h1">
              Нова стаття
            </Typography>

            <Button
              variant="primary"
              size="sm"
              iconSide="right"
              icon={<RiArrowRightFill size={ICON_M_SIZE} className="ml-8" />}
              disabled={!isPublishingEnabled}
              loading={isLoading}
              onClick={() => {
                void createArticleHandler();
              }}
            >
              Опублікувати
            </Button>
          </div>

          <div className={s["title-input-wrap"]}>
            <TextField
              label="Введіть заголовок"
              placeholder="Наприклад: Важлива інфрмація для вступників"
              value={title}
              maxLength={128}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
        </Container>
      </div>

      <Container>
        {nodes.length ? (
          nodes.map((node) => {
            return (
              <div className={s["field-wrap"]} key={node.index}>
                {node.nodeType === "heading-two" ? (
                  <div className={s["block-wrap"]}>
                    <TextField
                      className={s.field}
                      label="Заголовок"
                      placeholder="Введіть заголовок розділу"
                      value={node.content}
                      maxLength={128}
                      onChange={(event) => {
                        nodeValueChangeHandler(node.index, event.target.value);
                      }}
                    />
                    <Button
                      className={s["remove-btn"]}
                      variant="ghost"
                      size="md"
                      iconChild={<RiDeleteBin2Fill className={s.icon} />}
                      onClick={() => {
                        removeNode(node.index);
                      }}
                    />
                  </div>
                ) : (
                  <div className={s["block-wrap"]}>
                    <TextArea
                      className={clsx(s.field, s.textarea)}
                      label="Абзац"
                      placeholder="Введіть текст абзацу"
                      value={node.content}
                      onChange={(event) => {
                        nodeValueChangeHandler(node.index, event.target.value);
                      }}
                    />

                    <Button
                      className={s["remove-btn"]}
                      variant="ghost"
                      size="md"
                      iconChild={<RiDeleteBin2Fill className={s.icon} />}
                      onClick={() => {
                        removeNode(node.index);
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-32">
            <Typography
              className={s["empty-state-emoji"]}
              variant="3xl"
              component="span"
            >
              😕
            </Typography>
            <Typography variant="lg" component="p">
              Ви ще не додали жодного елементу...
            </Typography>
          </div>
        )}
      </Container>
      <div className="sticky bottom-0 mt-32 flex justify-center border-t border-slate-300 bg-grey-50 py-32">
        <AddElementDropdown
          onAddHeadingTwoClick={() => {
            appendNode("heading-two");
          }}
          onAddParagraphClick={() => {
            appendNode("paragraph");
          }}
        />
      </div>
    </div>
  );
};

export default memo(NewsCreate);
