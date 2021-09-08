import './App.css';
import React, { useState } from "react";

export default function TheInput({addData = f=>f}) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(0);

  const submit = event => {
    event.preventDefault();
    addData({name: name, time: time, price: price});
    setName("");
    setTime("");
    setPrice(0);
  };

 return (
    <form onSubmit={submit}>
      <input
        value={name}
        onChange={event => setName(event.target.value)}
        type="text"
        placeholder="name..."
        required
      />
      <input
        value={time}
        onChange={event => setTime(event.target.value)}
        type="date"
        placeholder="date..."
        required
      />
      <input
        value={price}
        onChange={event => setPrice(event.target.value)}
        type="number"
        placeholder="price..."
        required
      />
      <input type="submit" balue="Submit" />
    </form>
  );
}