import { memo } from "react";
import clsx from "clsx";
import type { SidebarOptionItemProps } from "./types";
import s from "./SidebarOptionItem.module.css";
import Typography from "@/ui/Typography/Typography";
import { ICON_L_SIZE } from "@/constants";

const SidebarOptionItem: React.FC<SidebarOptionItemProps> = ({
  className,
  active,
  title,
  Icon,
}) => {
  return (
    <span className={clsx(s.wrap, className, active && s.active)}>
      {Icon ? <Icon className={s.icon} size={ICON_L_SIZE} /> : null}
      <Typography className={s.title} variant="base">
        {title}
      </Typography>
    </span>
  );
};

export default memo(SidebarOptionItem);
