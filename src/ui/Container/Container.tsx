import { memo } from "react";
import clsx from "clsx";
import type { ContainerProps } from "./types";
import s from "./Container.module.css";

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={clsx(s.wrap, className)}>{children}</div>;
};

export default memo(Container);
