import './App.css';
import React, { useState } from "react";
import TheTable from './TheTable.js';
import TheTotal from './TheTotal.js';
import TheInput from './TheInput.js';
import TheFix from './TheFix.js';

const DAY_MILLISECOND = 24 * 60 * 60 * 1000;

const dayDistance = function (src) {//現在時刻とsrcの日付との日付の差を返す(実数で)
  const today = new Date();
  src = new Date(src);
  const deltaMillisecond = today.getTime() - src.getTime();
  return deltaMillisecond / DAY_MILLISECOND;
}

export default function TheMain() {
  const [data, setData] = useState([{name:"hoho", time: "2020-01-13", price: 100}]);
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

  const fixData = (d) => {  //returnを使わない方法が必要(でも<Modal>は必要では？)
    return (
      <TheFix 
        fixData = {(nd) => 
          {
            const delData = data.filter((e) => (e !== d));
            const newData = [...delData, nd];
            setData(newData);
            setPrices(newData.map(d => d.price));
            setTimes(newData.map(d => dayDistance(d.time)));
          }
        }
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
        deleter = {(d) => deleteData(d)}
        setData = {setData}
        setPrices = {setPrices}
        setTimes = {setTimes}
        dayDistance = {dayDistance}
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
