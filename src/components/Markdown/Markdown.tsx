import { memo } from "react";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import type { MarkdownProps } from "./types";
import MarkdownHeadlineTwo from "./components/MarkdownHeadlineTwo";
import MarkdownParagraph from "./components/MarkdownParagraph";
import MarkdownAnchor from "./components/MarkdownAnchor";
import s from "./Markdown.module.css";

const Markdown: React.FC<MarkdownProps> = ({ className, children }) => {
  return (
    <ReactMarkdown
      className={clsx(s.wrap, className)}
      components={{
        h2: MarkdownHeadlineTwo,
        p: MarkdownParagraph,
        a: MarkdownAnchor,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default memo(Markdown);
