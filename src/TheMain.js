import './App.css';
import React, { useState } from "react";
import TheTable from './TheTable.js';
import TheTotal from './TheTotal.js';
import TheInput from './TheInput.js';

export default function TheMain() {
  const [prices, setPrices] = useState([1]);
  const [times, setTimes] = useState([30]);
  const [data, setData] = useState([
    {
        name: 'New Necromancer',
        time: 'too long',
        price: 800
    },
    {
        name: 'Do androids dream of electric sheep?',
        time: 'recentry',
        price: 12300
    }
]);

  const addData = (d) => {
    const newData = [...data, d];
    setData(newData);
    alert('help!!!');
  };

  return (
    <div>
      <body>
        {TheTable( data )}
      </body>
      <footer>
        <table>
          <td>
            {TheTotal(
              prices.reduce(function(s, e){return s+e;}, 0),
              times.reduce(function(s, e){return s+e;}, 0)
            )}
          </td>
          <td>
            <TheInput
              addData = {addData}
            />
          </td>
        </table>
      </footer>
    </div>
  );
}
