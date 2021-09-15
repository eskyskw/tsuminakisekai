import './App.css';
import React, { useState } from "react";
import Modal from './Modal.js';

export default function TheFix({fixData = f=>f, show = false, setShow = f=>f,  thisName = "name...", thisDate = "date...", thisPrice = "price..."}) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(0);

  const submit = event => {
    event.preventDefault();
    fixData({name: name, time: time, price: price});
    setName("");
    setTime("");
    setPrice(0);
    setShow(false);
  };

  return (
    <Modal
      contain = {
        <form onSubmit={submit}>
          <input
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder={thisName}
            required
          />
          <input
            value={time}
            onChange={event => setTime(event.target.value)}
            type="date"
            placeholder={thisDate}
            required
          />
          <input
            value={price}
            onChange={event => setPrice(event.target.value)}
            type="number"
            placeholder={thisPrice}
            required
          />
          <input type="submit" balue="Submit" />
        </form>
      }
      show = {show}
      setShow = {setShow}
    />
  );
}