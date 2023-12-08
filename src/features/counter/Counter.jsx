import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  showTheInput,
  incrementByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const showInput = useSelector((state) => state.counter.showInput);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p> {count} </p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={resetAll}>reset</button>
        <button
          style={{ display: showInput ? "none" : "inline-block" }}
          onClick={() => {
            dispatch(showTheInput());
          }}
        >
          Increment By Amount
        </button>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          style={{ display: showInput ? "inline-block" : "none" }}
          type="text"
        />
        <button
          style={{ display: showInput ? "inline-block" : "none" }}
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        {/*  */}
      </div>
    </section>
  );
};

export default Counter;
