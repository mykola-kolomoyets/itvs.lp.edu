import { memo } from "react";
import clsx from "clsx";
import type { HeadingComponent } from "react-markdown/lib/ast-to-react";
import Typography from "@/ui/Typography/Typography";
import s from "./MarkdownHeadlineTwo.module.css";
import markdownStyles from "../../Markdown.module.css";

const MarkdownHeadlineTwo: HeadingComponent = ({ node: _, ...props }) => {
  return (
    <Typography
      {...props}
      className={clsx(s.wrap, markdownStyles["revert-margins"])}
      variant="3xl"
      component="h2"
    />
  );
};

export default memo(MarkdownHeadlineTwo);
