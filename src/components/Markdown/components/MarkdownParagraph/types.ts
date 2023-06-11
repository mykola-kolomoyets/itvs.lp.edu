import type { ReactMarkdownProps } from "react-markdown/lib/complex-types";

export type MarkdownParagraphType = React.ComponentType<
  Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    "ref"
  > &
    ReactMarkdownProps
>;
