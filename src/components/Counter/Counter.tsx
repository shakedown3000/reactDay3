import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <section className="counter_wrapper">
      <h4>Counter</h4>
      <div className="counter">
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <button className="reset" onClick={resetCounter}>
        Reset
      </button>
    </section>
  );
};

export default Counter;
