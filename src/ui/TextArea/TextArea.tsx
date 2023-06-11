import { memo, useId } from "react";
import clsx from "clsx";
import type { TextAreaProps } from "./types";
import Typography from "@/ui/Typography";
import s from "./TextArea.module.css";

const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  id,
  ...rest
}) => {
  const generatedId = useId();
  return (
    <div className={clsx(s.wrap, className)}>
      {label ? (
        <label className={s.label} htmlFor={id ?? generatedId}>
          <Typography variant="sm" component="span">
            {label}
          </Typography>
        </label>
      ) : null}
      <div className={s["input-wrap"]}>
        <div className={s.inner}>
          <textarea id={id ?? generatedId} className={s.input} {...rest} />
        </div>
      </div>
    </div>
  );
};

export default memo(TextArea);
