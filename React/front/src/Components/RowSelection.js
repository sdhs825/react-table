/*import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import jsonData from "./output.json";
import { Columns } from "./Columns";
import "./table.css";
import { useRowSelect } from "react-table/dist/react-table.development";
import { CheckBox } from "./CheckBox";

export default function RowSelection() {
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
        
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => jsonData, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
    useRowSelect,
    (hooks)=>{
        hooks.visibleColumns.push((columns)=>{
            return [
                {
                    id:'selection',
                    Header:({getToggleAllRowsSelectedProps})=>(
                        <CheckBox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell:({row})=>(
                        <CheckBox {...getToggleAllRowsSelectedProps()}/>
                    )
                    
                },
                ...columns
            ]
        })
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = tableInstance;
  const firstRow = rows.slice(0, 10);
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
          {firstRow.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  console.log(cell);
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
*/