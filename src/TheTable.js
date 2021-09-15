import React, { useState } from "react";
import TheFix from './TheFix.js';

export default function TheTable( {data=[], deleter = d=>d, setData,setPrices,setTimes,dayDistance}  ) {

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

    const [show, setShow] = useState(false);
    const [fixData, setFixData] = useState([]);

    const fixer = (d) =>{
      setFixData(d);
      setShow(true);
    }

    return (
      <>
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
        <TheFix
          fixData = {(nd) => 
            {
              const delData = data.filter((d) => (d !== fixData));
              const newData = [...delData, nd];
              setData(newData);
              setPrices(newData.map(d => d.price));
              setTimes(newData.map(d => dayDistance(d.time)));
            }
          }
          show = {show}
          setShow = {setShow}
          thisName = {fixData.name}
          thisDate = {fixData.time}
          thisPrice = {fixData.price}
        />
      </>
    );
}