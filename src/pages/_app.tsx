import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { api } from "@/utils/api";
import PageWithTransition from "@/layouts/PageWithTransition";
import Notification from "@/components/Notification";
import "nprogress/nprogress.css";
import "@/styles/globals.css";

const Portal = dynamic(() => {
  return import("@radix-ui/react-portal").then((module) => {
    return { default: module.Root };
  });
});

const MyApp: AppType<{ session: Session | null }> = (props) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <SessionProvider session={props.pageProps.session}>
      <PageWithTransition {...props} />
      {isRendered ? (
        <Portal asChild>
          <Notification />
        </Portal>
      ) : null}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
