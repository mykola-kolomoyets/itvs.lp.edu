import { memo } from "react";
import clsx from "clsx";
import type { FormattedDateProps } from "./types";
import { formatDate } from "@/utils/formatDate";
import Typography from "@/ui/Typography";
import s from "./FormattedDate.module.css";

const FormattedDate: React.FC<FormattedDateProps> = ({ className, date }) => {
  return (
    <Typography
      className={clsx(s.date, className)}
      variant="xs"
      component="span"
    >
      {formatDate(date)}
    </Typography>
  );
};

export default memo(FormattedDate);
