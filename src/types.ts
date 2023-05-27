import type { Session } from "next-auth";
import type { USER_ROLES } from "./constants";

export type WithClassName<T> = T & {
  className?: string;
};

export type WithChildren<T> = React.PropsWithChildren<T>;

export type FCProps<T> = WithClassName<WithChildren<T>>;

export type SessionContext = {
  session: Session | null;
};

export type ObjValues<T> = T[keyof T];

export type UserRole = ObjValues<typeof USER_ROLES>;
