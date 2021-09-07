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
  
    return (
      <table>
        <thead>
          {columns.map(c => (<td> {c.Header} </td>))}
        </thead>
        <tbody>
          {data.map(d => (
            <tr>
              {columns.map(c => {
                const acc = c.accessor;
                return (<td> {d[acc]} </td>);
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
}