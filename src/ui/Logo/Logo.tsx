import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { PATHS } from "@/constants";
import s from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <Link className={clsx(s.wrap, "focus-primary")} href={PATHS.MAIN}>
      <Image src="/images/logo.svg" width={93} height={34} alt="ІТВС" />
    </Link>
  );
};

export default memo(Logo);
