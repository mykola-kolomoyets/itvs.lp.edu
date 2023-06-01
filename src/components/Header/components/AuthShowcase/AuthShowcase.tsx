import { memo, useCallback } from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import {
  AVATAR_MINI_SIZE,
  DEFAULT_USER_NAME,
  EMPTY_AVATAR_URL,
  PATHS,
} from "@/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Button from "@/ui/Button";
import Link from "next/link";
import ButtonLink from "@/ui/ButtonLink";
import Typography from "@/ui/Typography";
import s from "./AuthShowcase.module.css";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const googleSignInHandler = useCallback(() => {
    void signIn("google", { callbackUrl: PATHS.PROFILE });
  }, []);

  return (
    <div className={s.wrap}>
      {sessionData ? (
        <div className={s.inner}>
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
              width={isMobile ? 24 : AVATAR_MINI_SIZE}
              height={isMobile ? 24 : AVATAR_MINI_SIZE}
              alt={sessionData.user.name ?? DEFAULT_USER_NAME}
            />
          </ButtonLink>
          {isMobile ? (
            <Typography className={s.name} variant="lg">
              {sessionData.user.name ?? DEFAULT_USER_NAME}
            </Typography>
          ) : null}
        </div>
      ) : (
        <Button variant="primary" size="sm" onClick={googleSignInHandler}>
          Кабінет
        </Button>
      )}
    </div>
  );
};

export default memo(AuthShowcase);
