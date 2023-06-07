import { memo } from "react";
import Image from "next/image";
import clsx from "clsx";
import type { CollectivePersonProps } from "./types";
import Typography from "@/ui/Typography";
import s from "./CollectivePerson.module.css";

const CollectivePerson: React.FC<CollectivePersonProps> = ({
  className,
  fullName,
  imageUrl,
  degree,
}) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s["image-wrap"]}>
        <Image
          className={s.image}
          src={imageUrl}
          width={123}
          height={114}
          alt={fullName}
        />
      </div>
      <div className={s["info-wrap"]}>
        <Typography className={s.name} variant="base" component="h6">
          {fullName}
        </Typography>
        <Typography className={s.degree} variant="base" component="span">
          {degree}
        </Typography>
      </div>
    </div>
  );
};

export default memo(CollectivePerson);
