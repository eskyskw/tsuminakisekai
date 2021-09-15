import React, { useState } from "react";
import { useTable } from 'react-table';
import Modal from './Modal.js';
/*
const [columns, setColumns] = useState([]);
const [data, setData] = useState([]);
*/
export default function TheTable( {data=[], fixer = f=>f, deleter = d=>d}  ) {

    const columns = [
        {
          Header: '積み',
          accessor: 'name'
        },
        {
          Header: '日付',
          accessor: 'time'
        },
        {
          Header: '価格',
          accessor: 'price'
        }
    ];

    return (
      <table>
        <thead><tr>
          {columns.map(c => (<td> {c.Header} </td>))}
          <td>修正</td>
          <td>削除</td>
        </tr></thead>
        <tbody>
          {data.map(d => (
            <tr>
              {columns.map(c => {
                const acc = c.accessor;
                return (<td> {d[acc]} </td>);
              })}
              <td>
                <button onClick={() => fixer(d)} > 修正 </button>
              </td>
              <td>
                <button onClick={() => deleter(d)} > 削除 </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}