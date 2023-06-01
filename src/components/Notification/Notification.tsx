import { memo, forwardRef, useCallback } from "react";
import {
  Provider as NotificationProvider,
  Root as NotificationRoot,
  Title as NotificationTitle,
  Viewport as NotificationViewport,
} from "@radix-ui/react-toast";
import clsx from "clsx";
import { useNotificationStore } from "./store/useNotificationStore";
import { NOTIFICATION_DURATION, NOTIFICATION_TYPE } from "./constants";
import Typography from "@/ui/Typography";
import s from "./Notification.module.css";

const Notification = forwardRef<HTMLDivElement, object>((_, ref) => {
  const { opened, title, type, actions } = useNotificationStore();

  const openChangeHandler = useCallback(
    (opened: boolean) => {
      if (!opened) {
        actions.closeNotification();
      }
    },
    [actions]
  );

  return (
    <NotificationProvider swipeDirection="up" duration={NOTIFICATION_DURATION}>
      <div className={s.wrap} ref={ref}>
        <NotificationRoot
          className={clsx(
            s.root,
            "focus-primary",
            type === NOTIFICATION_TYPE.ERROR && s["error"]
          )}
          open={opened}
          onOpenChange={openChangeHandler}
        >
          <NotificationTitle>
            <Typography className={s.title} variant="base">
              {title}
            </Typography>
          </NotificationTitle>
        </NotificationRoot>
        <NotificationViewport className={clsx(s.viewport, "focus-primary")} />
      </div>
    </NotificationProvider>
  );
});

Notification.displayName = "Notification";

export default memo(Notification);
