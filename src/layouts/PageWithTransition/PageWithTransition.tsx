import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import NProgress from "nprogress";
import clsx from "clsx";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/MainLayout";
import { ADMIN_PATHS, USER_ROLES } from "@/constants";
import s from "./PageWithTransition.module.css";
import useToggle from "@/hooks/useToggle";

const Loading = () => {
  return <div className="min-h-screen" />;
};

const PageWithTransition = ({ Component, pageProps }: AppProps) => {
  const { data, status } = useSession();
  const prevScreen = useRef(Component);
  const [transitioning, setTransitioning] = useState(false);
  const router = useRouter();
  const [isMounted, , setIsMounted] = useToggle();

  console.log(router.pathname, Object.values(ADMIN_PATHS));

  const isLoggedAdAdmin =
    status === "authenticated" && data?.user.role === USER_ROLES.ADMIN;
  const isPathnameAdminPath = Object.values(ADMIN_PATHS).includes(
    router.pathname
  );

  const handler = useCallback(() => {
    setTransitioning(true);

    setTimeout(() => {
      setTransitioning(false);
      prevScreen.current = Component;
    }, 350);
  }, [Component]);

  const routeChangeStartHandler = useCallback(() => {
    NProgress.start();
  }, []);

  const routeChangeCompleteHandler = useCallback(() => {
    NProgress.done();
    handler();
  }, [handler]);

  const routeChangeErrorHandler = useCallback(() => {
    NProgress.done();
  }, []);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    router.events.on("routeChangeStart", routeChangeStartHandler);
    router.events.on("routeChangeComplete", routeChangeCompleteHandler);
    router.events.on("routeChangeError", routeChangeErrorHandler);

    return () => {
      router.events.off("routeChangeStart", routeChangeStartHandler);
      router.events.off("routeChangeComplete", routeChangeCompleteHandler);
      router.events.off("routeChangeError", routeChangeErrorHandler);
    };
  }, [
    Component,
    routeChangeCompleteHandler,
    routeChangeErrorHandler,
    routeChangeStartHandler,
    router.events,
  ]);

  const Screen = !transitioning ? Component : Loading;

  useEffect(() => {
    if (!transitioning) {
      setIsMounted(true);
    }
  }, [setIsMounted, transitioning]);

  return (
    <MainLayout
      headerClasses={clsx(
        isMounted && isLoggedAdAdmin && isPathnameAdminPath && s.admin
      )}
      footerClasses={clsx(
        isMounted && isLoggedAdAdmin && isPathnameAdminPath && s.admin
      )}
    >
      <div
        className={clsx(s.inner, {
          "animate-slideUpEnter": !transitioning,
          "animate-slideUpLeave": transitioning,
        })}
      >
        <Screen {...pageProps} />
      </div>
    </MainLayout>
  );
};
export default PageWithTransition;
