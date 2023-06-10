import { memo } from "react";
import type { UserRoleCellProps } from "./types";
import { ROLE_LABELS } from "@/modules/Profile/constants";
import Typography from "@/ui/Typography/Typography";
import s from "./UserRoleCell.module.css";

const UserRoleCell: React.FC<UserRoleCellProps> = ({ role }) => {
  return (
    <div className={s.wrap}>
      <Typography className={s.role} variant="sm" component="span">
        {ROLE_LABELS[role]}
      </Typography>
    </div>
  );
};

export default memo(UserRoleCell);
