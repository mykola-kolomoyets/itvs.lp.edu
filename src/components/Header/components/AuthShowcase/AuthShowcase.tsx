import { memo } from "react";
import { signIn, useSession } from "next-auth/react";
import { PATHS } from "@/constants";
import Button from "@/ui/Button";
import Icon from "@/ui/Icon";
import Link from "next/link";
import ButtonLink from "@/ui/ButtonLink";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {sessionData ? (
        <ButtonLink
          as={Link}
          href={PATHS.PROFILE}
          variant="ghost"
          size="sm"
          iconChild={<Icon id="icon-account_24" />}
        />
      ) : (
        <Button variant="primary" size="sm" onClick={() => void signIn()}>
          Увійти
        </Button>
      )}
    </div>
  );
};

export default memo(AuthShowcase);
