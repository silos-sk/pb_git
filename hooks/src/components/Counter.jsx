import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const Counter = () => {
  let [ counter, setCounter ] = useState(0);

  const countUp = ()=>{
    counter === 3 ? setCounter(0) : setCounter(counter+1);
  }

  const countDown = ()=> {
    counter === -3 ? setCounter(0) : setCounter(counter-1);
  }

  return (
    <div>
      <h1>Exercise 3</h1>
      <h2>Counter: {counter}</h2>
      <Button onClick={countUp}>Increment</Button>
      <Button onClick={countDown}>Decrement</Button>
    </div>
  );
};

export default Counter;
