import { env } from "@/env.mjs";

export const IS_DEV = env.NODE_ENV === "development";
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
  ADMIN: "ADMIN",
} as const;
