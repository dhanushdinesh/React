import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';

export default function App() {

  // let name = "Gamana";

  const [name, setName] = useState("Dhanush");
  const [color, setColor] = useState("Red");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div>
      <Greeting name={name} />

      <button onClick={() => setName("Dhanu")}>
        click for changes
      </button>

      <h2>My fav color is {color}</h2>

      <button onClick={() => setColor("Black")}>
        Reveal color
      </button>

      <h2>The count is {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        count
      </button>

      <h1>The time start now {count}</h1>
    </div>
  );
}