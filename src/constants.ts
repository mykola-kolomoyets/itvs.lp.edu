import { env } from "@/env.mjs";

export const APP_VERSION = "alpha.0.4.1";
export const IS_DEV = env.NEXT_PUBLIC_NODE_ENV === "development";
export const ERROR_CODE = {
  UNAUTHORIZED: "UNAUTHORIZED",
} as const;

export const GOOGLE_AUTH_PARAMS = {
  prompt: "consent",
  access_type: "offline",
  response_type: "code",
};

export const USER_ROLES = {
  USER: "USER",
  AUTHOR: "AUTHOR",
  ADMIN: "ADMIN",
} as const;

export const EMPTY_AVATAR_URL = "/images/avatar-default.webp";
export const DEFAULT_USER_NAME = "Ім'я користувача";

export const AVATAR_MINI_SIZE = 32;
export const AVATAR_BASE_SIZE = 74;

export const ICON_S_SIZE = 12;
export const ICON_M_SIZE = 16;
export const ICON_L_SIZE = 20;

export const VNS_URL = "https://vns.lpnu.ua/";
export const STUDENTS_SCHEDULE_URL =
  "https://student.lpnu.ua/students_schedule";
export const PATHS = {
  MAIN: "/",
  PROFILE: "/profile",
  NEWS: "/news",
  COLLECTIVE: "/collective",
  ABOUT: "/about",
} as const;
