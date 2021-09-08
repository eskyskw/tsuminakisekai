import './App.css';
import React, { useState } from "react";
import TheTable from './TheTable.js';
import TheTotal from './TheTotal.js';
import TheInput from './TheInput.js';
import { assertProperty } from '@babel/types';

const DAY_MILLISECOND = 24 * 60 * 60 * 1000;

const dayDistance = function (src) {//現在時刻とsrcの日付との日付の差を返す(実数で)
  const today = new Date();
  src = new Date(src);
  const deltaMillisecond = today.getTime() - src.getTime();
  return deltaMillisecond / DAY_MILLISECOND;
}

export default function TheMain() {
  const [data, setData] = useState([]);
  const [prices, setPrices] = useState([0]);
  const [times, setTimes] = useState([]);

  const addData = (d) => {
    const newData = [...data, d];
    setData(newData);
    setPrices(newData.map(d => d.price));
    setTimes(newData.map(d => dayDistance(d.time)));
  };

  const deleteData = (del) => {
    //alert("この項目を削除しますか？");的なのほしいね
    const newData = data.filter((d) => (d !== del));
    setData(newData);
    setPrices(newData.map(d => d.price));
    setTimes(newData.map(d => dayDistance(d.time)));
  };

  const fixData = (d) => {
    return (
      <TheInput 
        addData = {addData}
        thisName = {d.name}
        thisDate = {d.time}
        thisPrice = {d.price}
      />
    );
  };

  return (
    <div>
      <TheTable
        data = {data}
        fixer = {(d) => fixData(d)}
        deleter = {(d) => deleteData(d)}
      />
      <footer>
        <table><tbody><tr>
          <td>
            <TheTotal
              priceSum = { prices.reduce(function(s, e){return parseInt(s) + parseInt(e);}, 0) }
              timeSum = { parseInt(times.reduce(function(s, e){return s+e;}, 0)) }
            />
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
