import { memo } from "react";
import type { UserEmailCellProps } from "./types";
import s from "./UserEmailCell.module.css";
import Typography from "@/ui/Typography/Typography";

const UserEmailCell: React.FC<UserEmailCellProps> = ({ email }) => {
  return (
    <div className={s.wrap}>
      <Typography className={s.email} variant="sm" component="span">
        {email}
      </Typography>
    </div>
  );
};

export default memo(UserEmailCell);
