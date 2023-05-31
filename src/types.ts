import type { Session } from "next-auth";
import type { USER_ROLES } from "./constants";

export type WithClassName<T> = T & {
  className?: string;
};

export type WithChildren<T> = React.PropsWithChildren<T>;

export type FCProps<T> = WithClassName<WithChildren<T>>;

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type SessionContext = {
  session: Session | null;
};

export type ObjValues<T> = T[keyof T];

export type UserRole = ObjValues<typeof USER_ROLES>;

export type ArticleItem = {
  id: string;
  title: string;
  createdAt: Date | string;
};
