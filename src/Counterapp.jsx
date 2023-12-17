import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementamout, reset } from "./features/Couter";
function Counterapp() {
  const [incrementamount, setIncrementamount] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Counter.count);
  console.log(state, "state");
  const addvalue = incrementamount || 0;
  return (
    <div>
      {state}Counterapp
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>sub</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <input
        type="number"
        value={incrementamount}
        onChange={(e) => setIncrementamount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementamout(addvalue))}>
        incrementamout
      </button>
    </div>
  );
}

export default Counterapp;
