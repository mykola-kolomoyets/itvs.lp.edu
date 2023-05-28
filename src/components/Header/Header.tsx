import { memo, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { RiCloseFill, RiLogoutBoxRLine, RiMenuLine } from "react-icons/ri";
import clsx from "clsx";
import { ICON_L_SIZE, ICON_M_SIZE } from "@/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useToggle from "@/hooks/useToggle";
import { useDocumentLockScrollY } from "@/hooks/useDocumentLockScrollY";
import Logo from "@/ui/Logo";
import Button from "@/ui/Button";
import Container from "@/ui/Container";
import Navigation from "./components/Navigation";
import AuthShowcase from "./components/AuthShowcase";
import s from "./Header.module.css";

const Header: React.FC = () => {
  const { status } = useSession();
  const [isMobileMenuOpened, toggleIsMobileMenuOpened] = useToggle();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { lockScrollY, unlockScrollY } = useDocumentLockScrollY();

  useEffect(() => {
    if (isMobile) {
      isMobileMenuOpened ? lockScrollY() : unlockScrollY();
    }
  }, [isMobile, isMobileMenuOpened, lockScrollY, unlockScrollY]);

  return (
    <header className={s.wrap}>
      <Container className={s.inner}>
        <Logo />
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="sm"
              iconChild={
                isMobileMenuOpened ? (
                  <RiCloseFill size={ICON_L_SIZE} />
                ) : (
                  <RiMenuLine size={ICON_L_SIZE} />
                )
              }
              onClick={toggleIsMobileMenuOpened}
            />

            <div
              className={clsx(s["mobile-wrap"], isMobileMenuOpened && s.opened)}
            >
              <Navigation
                className={clsx(isMobile && s["mobile-nav"])}
                navLinkSize={isMobile ? "lg" : "base"}
                itemClassName={s["mobile-nav-item"]}
                withDivider={!isMobile}
                onItemClick={toggleIsMobileMenuOpened}
              />
              <div className={s["mobile-auth-wrap"]}>
                <AuthShowcase />
                {status === "authenticated" ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    iconSide="right"
                    icon={<RiLogoutBoxRLine size={ICON_M_SIZE} />}
                    onClick={() => void signOut()}
                  >
                    Вийти
                  </Button>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <Navigation
              className={clsx(isMobile && s.mobile)}
              navLinkSize={isMobile ? "lg" : "base"}
              withDivider={!isMobile}
            />
            <AuthShowcase />
          </>
        )}
      </Container>
    </header>
  );
};

export default memo(Header);
