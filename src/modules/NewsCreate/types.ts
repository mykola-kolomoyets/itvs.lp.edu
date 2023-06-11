import type { MarkdownNodes } from "@/components/Markdown";

export type NewsCreateProps = {
  className?: string;
};

export type NewsItemConfig = {
  index: number;
  nodeType: MarkdownNodes;
  content: string;
};
