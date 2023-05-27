import { env } from "@/env.mjs";

export const APP_VERSION = "alpha.0.3.1";
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
