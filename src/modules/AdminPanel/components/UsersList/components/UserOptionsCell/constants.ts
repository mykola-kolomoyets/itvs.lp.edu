import { USER_ROLES } from "@/constants";
import { ROLE_LABELS } from "@/modules/Profile/constants";
import type { SelectOptionType } from "@/types";

export const USER_ROLE_OPTIONS: SelectOptionType[] = [
  {
    label: ROLE_LABELS[USER_ROLES.USER],
    value: USER_ROLES.USER,
  },
  {
    label: ROLE_LABELS[USER_ROLES.ADMIN],
    value: USER_ROLES.ADMIN,
  },
  {
    label: ROLE_LABELS[USER_ROLES.AUTHOR],
    value: USER_ROLES.AUTHOR,
  },
];
