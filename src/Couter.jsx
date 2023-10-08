import React, { useReducer } from "react";

function Couter() {
  const intialstate = { intial: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, intial: state.intial + 1 };
      case "sub":
        return { ...state, intial: state.intial - 1 };
    }
  };
  const [state, dispatch] = useReducer(reducer, intialstate);
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      {state.intial}
      <button onClick={() => dispatch({ type: "sub" })}>sub</button>
    </div>
  );
}

export default Couter;
