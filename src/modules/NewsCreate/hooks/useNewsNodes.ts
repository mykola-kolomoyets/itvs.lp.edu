import { useCallback, useState, useTransition } from "react";
import type { NewsItemConfig } from "../types";
import { transformNodeToMarkdown } from "@/components/Markdown/utils/transformNodeToMarkdown";
import { MARKDOWN_NODES } from "@/components/Markdown/constants";

export const useNewsNodes = () => {
  const [nodes, setNodes] = useState<NewsItemConfig[]>([]);
  const [, startTransition] = useTransition();

  const appendNode = useCallback(
    (nodeType: NewsItemConfig["nodeType"]) => {
      const newNode: NewsItemConfig = {
        index: nodes.length,
        nodeType,
        content: `${
          nodeType === MARKDOWN_NODES.HEADING_TWO ? "Заголовок" : "Абзац"
        } ${nodes.length + 1}`,
      };

      setNodes((prev) => {
        return prev.concat([newNode]);
      });
    },
    [nodes.length]
  );

  const removeNode = useCallback((indexToRemove: number) => {
    setNodes((prev) => {
      const filteredNodes = prev.filter((node) => node.index !== indexToRemove);

      return filteredNodes.map((node, nodeIndex) => {
        return {
          ...node,
          index: nodeIndex > indexToRemove ? nodeIndex - 1 : nodeIndex,
        };
      });
    });
  }, []);

  const nodeValueChangeHandler = (index: number, newContent: string) => {
    startTransition(() => {
      setNodes((prev) => {
        return prev.map((node) => {
          if (node.index === index) {
            return {
              ...node,
              content: newContent,
            };
          }

          return node;
        });
      });
    });
  };

  const transformNodesToMarkdownString = useCallback(() => {
    let markdownString = "";

    nodes.forEach(({ nodeType, content }) => {
      const nodeMarkdown = transformNodeToMarkdown(nodeType, content);
      markdownString += `${nodeMarkdown}\n\n`;
    });

    return markdownString;
  }, [nodes]);

  return {
    nodes,
    appendNode,
    removeNode,
    nodeValueChangeHandler,
    transformNodesToMarkdownString,
  };
};
