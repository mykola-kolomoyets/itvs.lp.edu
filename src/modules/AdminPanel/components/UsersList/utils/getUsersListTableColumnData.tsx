import type { ColumnDef } from "@tanstack/react-table";
import type { UserRole } from "@/types";
import type { UserItem } from "@/api/types";
import UserOptionsCell from "../components/UserOptionsCell/UserOptionsCell";
import UserEmailCell from "../components/UserEmailCell/UserEmailCell";
import UserRoleCell from "../components/UserRoleCell/UserRoleCell";
import UserNameCell from "../components/UserNameCell";

export const getUsersListTableColumnData = (): ColumnDef<UserItem>[] => {
  return [
    {
      accessorKey: "name",
      header: "Імʼя",
      minSize: 300,
      cell(info) {
        const userName = info.getValue<string>();
        const image = info.row.original?.image;

        return <UserNameCell name={userName} image={image} />;
      },
    },
    {
      accessorKey: "email",
      header: "E-mail",
      minSize: 300,
      cell(info) {
        const email = info.getValue<string>();

        return <UserEmailCell email={email} />;
      },
    },
    {
      accessorKey: "role",
      enableSorting: false,
      header: "Роль",
      minSize: 170,
      maxSize: 170,
      cell(info) {
        const role = info.getValue<UserRole>();

        return <UserRoleCell role={role} />;
      },
    },
    {
      accessorKey: "id",
      header: "",
      enableSorting: false,
      cell(info) {
        return <UserOptionsCell user={info.row.original} />;
      },
    },
  ];
};
