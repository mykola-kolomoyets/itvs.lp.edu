import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import clsx from "clsx";
import MainLayout from "@/layouts/MainLayout";

const Loading = () => {
  return <div className="min-h-screen" />;
};

const PageWithTransition = ({ Component, pageProps }: AppProps) => {
  const prevScreen = useRef(Component);
  const [transitioning, setTransitioning] = useState(false);
  const router = useRouter();

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

  return (
    <MainLayout>
      <div
        className={clsx({
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
