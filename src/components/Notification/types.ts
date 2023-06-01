import type { ObjValues } from '@/types';
import type { NOTIFICATION_TYPE } from './constants';

export type NotificationType = ObjValues<typeof NOTIFICATION_TYPE>;

export type NotificationStoreState = {
    opened: boolean;
    title: string;
    type: NotificationType;
};

export type NotificationStoreActions = {
    actions: {
        openNotification: (title: string, type?: NotificationType) => void;
        closeNotification: () => void;
    };
};

export type NotificationStore = NotificationStoreState & NotificationStoreActions;
