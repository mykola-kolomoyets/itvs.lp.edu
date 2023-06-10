import { memo, forwardRef } from "react";
import { flexRender } from "@tanstack/react-table";
import { FaSort } from "react-icons/fa";
import clsx from "clsx";
import type { TableProps } from "./types";
import { ICON_S_SIZE } from "@/constants";
import Typography from "@/ui/Typography";
import s from "./Table.module.css";

const Table = forwardRef<HTMLDivElement, TableProps>(
  ({ children, headerGroups, customRenderIds, className }, ref) => {
    return (
      <div className={clsx(s.wrap, className)} ref={ref}>
        <table>
          <thead className={s.thead}>
            {headerGroups.map((headerGroup) => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const columnId = header.column.id;
                    const headerValue = header.column.columnDef.header;
                    let content;

                    if (
                      Array.isArray(customRenderIds) &&
                      customRenderIds.includes(columnId)
                    ) {
                      content = flexRender(headerValue, header.getContext());
                    } else if (headerValue) {
                      const canSort = header.column.getCanSort();
                      content = (
                        <button
                          className={s["sorting-btn"]}
                          type="button"
                          disabled={!canSort}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          <Typography
                            className={s["header-text"]}
                            component="span"
                            variant="sm"
                          >
                            {flexRender(headerValue, header.getContext())}
                          </Typography>
                          {canSort && (
                            <FaSort className={s.icon} size={ICON_S_SIZE} />
                          )}
                        </button>
                      );
                    }

                    return (
                      <th
                        className={s.th}
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{
                          minWidth: header.column.columnDef.minSize,
                          maxWidth: header.column.columnDef.maxSize,
                        }}
                      >
                        {content}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody className={s.tbody}>{children}</tbody>
        </table>
      </div>
    );
  }
);

Table.displayName = "Table";

export default memo(Table);
