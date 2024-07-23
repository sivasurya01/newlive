import React, { createContext, useContext, useReducer } from "react";

export const Context = createContext();
function Counting() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, state: (state.value += 1) };
      case "sub":
        return { ...state, state: (state.value -= 1) };
        break;
      default:
        break;
    }
  };
  const intialState = { value: 0 };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      Counting
      {state.value}
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      <button onClick={() => dispatch({ type: "sub" })}>sub</button>
      <Context.Provider value={"sivasurya"}>
        <Welcome />
      </Context.Provider>
    </div>
  );
}

export default Counting;
export const Welcome = () => {
  const content = useContext(Context);
  return <div>{content} welcome</div>;
};
