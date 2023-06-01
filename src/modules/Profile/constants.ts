import type { UserRole } from "@/types";
import { USER_ROLES } from "@/constants";

export const ROLE_LABELS: Record<UserRole, string> = {
  [USER_ROLES.USER]: "Користувач",
  [USER_ROLES.AUTHOR]: "Менеджер контенту",
  [USER_ROLES.ADMIN]: "Адміністратор",
};
