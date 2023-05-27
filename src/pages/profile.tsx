import { useEffect } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import type { UserRole } from "@/types";
import { PATHS, USER_ROLES } from "@/constants";
import MainLayout from "@/layouts/MainLayout";
import Container from "@/ui/Container";
import Typography from "@/ui/Typography";
import Button from "@/ui/Button";

const ROLE_LABELS: Record<UserRole, string> = {
  [USER_ROLES.USER]: "Користувач",
  [USER_ROLES.AUTHOR]: "Менеджер контенту",
  [USER_ROLES.ADMIN]: "Адміністратор",
};

const ProfilePage: NextPage = () => {
  const { data: sessionData, status: authStatus } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      void router.replace(PATHS.MAIN);
    }
  }, [authStatus, router, sessionData]);

  return (
    <MainLayout>
      <Container className="">
        <Typography className="my-32 font-black" variant="3xl" component="h1">
          Особистий кабінет
        </Typography>

        <section className="flex items-center justify-between rounded-[13px] bg-light p-16">
          <div className="inline-flex">
            <Image
              className="rounded-sm"
              src={sessionData?.user?.image ?? "/images/avatar-default.webp"}
              width={74}
              height={74}
              alt={sessionData?.user.name ?? ""}
            />
            <div className="ml-24 inline-flex flex-col items-start justify-start">
              <Typography className="mb-6 font-black" variant="xxl">
                {sessionData?.user.name ?? sessionData?.user.email}
              </Typography>
              <Typography
                className="mb-6 font-medium text-grey-500"
                variant="sm"
              >
                {ROLE_LABELS[sessionData?.user.role ?? USER_ROLES.USER]}
              </Typography>
            </div>
          </div>
          <Button variant="primary" size="sm" onClick={() => void signOut()}>
            Вийти
          </Button>
        </section>
        <section className="mt-32 rounded-[13px] bg-light p-24 pb-[55px]">
          <Typography className="mb-24 font-black" variant="xxl">
            Створенні статті
          </Typography>

          <div className="flex">
            <Image
              src="/images/article.webp"
              width={40}
              height={40}
              alt="No articles"
            />
            <Typography className="ml-24" variant="xxl">
              Ви ще не створили статей
            </Typography>
          </div>
        </section>
      </Container>
    </MainLayout>
  );
};

export default ProfilePage;
