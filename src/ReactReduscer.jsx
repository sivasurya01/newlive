import React, { useReducer } from "react";
function ReactReduscer() {
  const intialvalue = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        console.log(state);
        return { ...state, count: parseInt(state.count) + parseInt(1) };
      case "sub":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, intialvalue);
  return (
    <div>
      state {state.count}ReactReduscer
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      <button onClick={() => dispatch({ type: "sub" })}>sub</button>
    </div>
  );
}

export default ReactReduscer;
