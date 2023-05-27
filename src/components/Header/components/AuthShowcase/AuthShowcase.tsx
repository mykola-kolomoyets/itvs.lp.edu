import { memo } from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import {
  AVATAR_MINI_SIZE,
  DEFAULT_USER_NAME,
  EMPTY_AVATAR_URL,
  PATHS,
} from "@/constants";
import Button from "@/ui/Button";
import Link from "next/link";
import ButtonLink from "@/ui/ButtonLink";
import s from "./AuthShowcase.module.css";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className={s.wrap}>
      {sessionData ? (
        <ButtonLink
          className={s.avatar}
          as={Link}
          href={PATHS.PROFILE}
          variant="ghost"
          size="sm"
        >
          <Image
            className={s.image}
            src={sessionData.user.image ?? EMPTY_AVATAR_URL}
            width={AVATAR_MINI_SIZE}
            height={AVATAR_MINI_SIZE}
            alt={sessionData.user.name ?? DEFAULT_USER_NAME}
          />
        </ButtonLink>
      ) : (
        <Button variant="primary" size="sm" onClick={() => void signIn()}>
          Увійти
        </Button>
      )}
    </div>
  );
};

export default memo(AuthShowcase);
