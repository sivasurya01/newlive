import React, { useReducer } from "react";

function Reduser() {
  const reducer = (count, action) => {
    switch (action.type) {
      case "add":
        return count + 1;
      case "sub":
        return count - 1;

      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  const add = () => {
    dispatch({ type: "add" });
  };
  const sub = () => {
    dispatch({ type: "sub" });
  };
  return (
    <div>
      <button onClick={add}>add</button>
      <p>{state}</p>
      <button onClick={sub}>sub</button>
    </div>
  );
}

export default Reduser;
