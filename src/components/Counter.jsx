import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  clear,
} from "../../redux/slices/counterSlice.js";

const Counter = () => {
  const dispatch = useDispatch(); //to perform actions

  // to get state/show value
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <p className="mb-4">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>

        <div className="flex gap-2">
          <input className="border border-gray-300 rounded px-2 py-1"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
          <button className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              dispatch(incrementByAmount(Number(num))); //means we can pass value here and the value will increase by that amount
            }}
          >
            Increase By Amount
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(clear());
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Counter;
