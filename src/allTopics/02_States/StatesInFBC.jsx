import { useState } from "react";

const StateInFBC = () => {
  const [count, setCount] = useState(0); // [ud , function]

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Learn states in function Based </h1>
      <h2>Counter : {count}</h2>
      <button onClick={updateCount}>click</button>
    </>
  );
};

export default StateInFBC;

//! WHAT IS STATE ?
// In react, state is a components "memory" . It is an object used to store data that changes over time,such as user input ,a shopping cart or whether a toggle is active.

//! WHAT IS useState ?
// useState is a React Hook that lets you add a state variable to your component.

//! How it works (The syntax)

// When you use it, You always returns an array consists of:
// 1) The current value (what's currently in the memory box).
// 2) A function to update it(the tool to put something new in the box).
