import { memo } from "react";
import type { UserNameCellProps } from "./types";
import s from "./UserNameCell.module.css";
import Image from "next/image";
import { EMPTY_AVATAR_URL } from "@/constants";
import Typography from "@/ui/Typography/Typography";

const UserNameCell: React.FC<UserNameCellProps> = ({ name, image }) => {
  return (
    <div className={s.wrap}>
      <div className={s["image-wrap"]}>
        <Image
          className={s.image}
          src={image ?? EMPTY_AVATAR_URL}
          width={32}
          height={32}
          alt={name}
        />
      </div>
      <Typography className={s.name} variant="sm" component="span">
        {name}
      </Typography>
    </div>
  );
};

export default memo(UserNameCell);
