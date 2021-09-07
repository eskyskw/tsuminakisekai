import './App.css';
import React, { useState } from "react";
import TheTable from './TheTable.js';
import TheTotal from './TheTotal.js';
import TheInput from './TheInput.js';

export default function TheMain() {
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
const [prices, setPrices] = useState(data.map(d => d.price));
const [times, setTimes] = useState([30]);//timesをテキストにするかintにするか……

  const addData = (d) => {
    const newData = [...data, d];
    setData(newData);
    setPrices(data.map(d => d.price));
    setTimes(data.map(d => d.time));
  };

  return (
    <div>
      <TheTable
        data = {data}
      />
      <footer>
        <table><tbody><tr>
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
        </tr></tbody></table>
      </footer>
    </div>
  );
}
