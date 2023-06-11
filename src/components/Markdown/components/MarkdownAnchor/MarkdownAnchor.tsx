import { memo } from "react";
import clsx from "clsx";
import type { MarkdownAnchorType } from "./types";
import Typography from "@/ui/Typography/Typography";
import s from "./MarkdownAnchor.module.css";
import markdownStyles from "../../Markdown.module.css";

const MarkdownAnchor: MarkdownAnchorType = ({ node: _, ...props }) => {
  return (
    <Typography
      {...props}
      className={clsx(s.wrap, "link", markdownStyles["revert-paddings"])}
      variant="lg"
      component="a"
    ></Typography>
  );
};

export default memo(MarkdownAnchor);
