import type { ReactMarkdownProps } from "react-markdown/lib/complex-types";

export type MarkdownAnchorType = React.ComponentType<
  Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "ref"
  > &
    ReactMarkdownProps
>;
