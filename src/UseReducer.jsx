import React, { useReducer } from "react";

function UseReducer() {
  const statecount = 0;
  const reducer = (statecount, action) => {
    switch (action.type) {
      case "add":
        return statecount + 1;
      case "sub":
        return statecount - 1;
    }
  };
  const [count, dispatch] = useReducer(reducer, statecount);
  return (
    <div>
      UseReducer
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      {count}
      <button onClick={() => dispatch({ type: "sub" })}>sub</button>
    </div>
  );
}

export default UseReducer;
