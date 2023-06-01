import { create } from "zustand";
import type { NotificationStore, NotificationStoreState } from "../types";
import { NOTIFICATION_DURATION, NOTIFICATION_TYPE } from "../constants";

let timeout: ReturnType<typeof setTimeout>;
const initialState: NotificationStoreState = {
  opened: false,
  title: "",
  type: NOTIFICATION_TYPE.DEFAULT,
};

export const useNotificationStore = create<NotificationStore>((set, get) => {
  return {
    ...initialState,
    actions: {
      openNotification(title, type) {
        clearTimeout(timeout);
        set(
          { opened: true, title, type: type ?? NOTIFICATION_TYPE.DEFAULT },
          false
        );

        timeout = setTimeout(() => {
          get().actions.closeNotification();
        }, NOTIFICATION_DURATION);
      },
      closeNotification() {
        const type = get().type;

        clearTimeout(timeout);
        set({ opened: false, type }, false);
      },
    },
  };
});
