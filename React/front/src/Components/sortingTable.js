import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import jsonData from "./output.json";
import { Columns } from "./Columns";
import "./table.css";

export default function SortingTable() {
  /*
    <tfoot>
          {footerGroups.map((footerGroup) => {
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => {
                <td {...column.getFooterProps}>{column.render("Footer")}</td>;
              })}
            </tr>;
          })}
        </tfoot>
        */
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => jsonData, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "<" : ">") : ""}
                  </span>
              
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                    console.log(cell)
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
