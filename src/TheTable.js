import React, { useState } from "react";
import { useTable } from 'react-table';
/*
const [columns, setColumns] = useState([]);
const [data, setData] = useState([]);
*/
export default function TheTable( {data=[]} ) {

    const columns = [
        {
            Header: '積み',
            accessor: 'name'
        },
        {
            Header: '期間',
            accessor: 'time'
        },
        {
            Header: '価格',
            accessor: 'price'
        }
    ];
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    });
  
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}