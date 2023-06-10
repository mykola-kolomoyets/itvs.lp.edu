import { memo, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type SortingState,
  type HeaderGroup,
} from "@tanstack/react-table";
import clsx from "clsx";
import type { UsersListProps } from "./types";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { useGetUsersListExceptMe } from "@/hooks/api/useUsersApi";
import { getUsersListTableColumnData } from "./utils/getUsersListTableColumnData";
import Table from "@/components/Table";
import Typography from "@/ui/Typography";
import TextField from "@/ui/TextField";
import s from "./UsersList.module.css";
import Loader from "@/ui/Loader/Loader";

const UsersList: React.FC<UsersListProps> = ({ className }) => {
  const { data } = useSession();
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "name",
      desc: false,
    },
  ]);

  const [search, debouncedSearch, setSearch] = useDebouncedState("");
  const { data: users, isLoading } = useGetUsersListExceptMe(
    data?.user.id ?? "",
    debouncedSearch,
    "name",
    false,
    !!data?.user.id
  );

  const table = useReactTable({
    data: users ?? [],
    columns: getUsersListTableColumnData(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    enableSorting: false,
    // onSortingChange: setSorting,
    // manualSorting: true,
    // enableMultiSort: false,
    // enableSortingRemoval: false,
  });

  useEffect(() => {
    console.log("sorting: rerender", sorting);
  }, [sorting]);

  useEffect(() => {
    console.log("users rerender", users);
  }, [users]);

  const a = table.getRowModel();

  useEffect(() => {
    console.log("table.getRowModel() rerender");
  }, [a]);

  if (!data) {
    return null;
  }

  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s.top}>
        <Typography className={s.title} variant="xxl">
          Користувачі
        </Typography>
      </div>
      <section className={s.content}>
        <div className={s["search-wrap"]}>
          <TextField
            type="search"
            placeholder="Пошук по імені"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className={s["table-wrap"]}>
          {isLoading ? (
            <div className={s["loader-wrap"]}>
              <Loader size={75} />
            </div>
          ) : users?.length ? (
            <Table
              className={s.table}
              headerGroups={table.getHeaderGroups() as HeaderGroup<unknown>[]}
            >
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </Table>
          ) : (
            <Typography className={s["no-users-message"]} variant="xl">
              Користувачів по запиту
              <span className="font-bold"> {debouncedSearch} </span>
              не знайдено
            </Typography>
          )}
        </div>
      </section>
    </div>
  );
};

export default memo(UsersList);
