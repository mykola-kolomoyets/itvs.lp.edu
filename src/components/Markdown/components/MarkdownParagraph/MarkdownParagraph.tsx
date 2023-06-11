import { memo } from "react";
import clsx from "clsx";
import type { MarkdownParagraphType } from "./types";
import Typography from "@/ui/Typography/Typography";
import s from "./MarkdownParagraph.module.css";
import markdownStyles from "../../Markdown.module.css";

const MarkdownParagraph: MarkdownParagraphType = ({ node: _, ...props }) => {
  return (
    <Typography
      {...props}
      variant="lg"
      component="p"
      className={clsx(s.wrap, markdownStyles["revert-margins"])}
    />
  );
};

export default memo(MarkdownParagraph);
