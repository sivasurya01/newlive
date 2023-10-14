import React, { useReducer } from "react";
import { Input } from "sivasuryainput/src/componts/Input";
import { useSelector } from "react-redux";
const initialState = {
  input1: "",
  input2: "",
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "updateInput1":
      console.log({
        ...state,
        input1: action.value,
      });
      return {
        ...state,
        input1: action.value,
      };
    case "updateInput2":
      return {
        ...state,
        input2: action.value,
      };
    case "addition":
      return {
        ...state,
        count: parseInt(state.input1) + parseInt(state.input2),
      };
    case "subract":
      return {
        ...state,
        count: parseInt(state.input1) - parseInt(state.input2),
      };
    case "multiply":
      return {
        ...state,
        count: parseInt(state.input1) * parseInt(state.input2),
      };
    case "division":
      return {
        ...state,
        count: parseInt(state.input1) / parseInt(state.input2),
      };
    // Handle other cases here
    default:
      return state;
  }
};
function CalC() {
  const color = useSelector((state) => state.color.value); // Provide the selector
  console.log(color.bgcolor, "color");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "state");
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ type: name, value });
    dispatch({ type: name, value });
  };
  return (
    <>
      <div style={{ backgroundColor: color.bgcolor }}>
        {/* <Input type="number" className="border-2" /> */}
        {/* <button onClick={() => dispatch({ type: "addition" })}>Add</button> */}
        <select
          onChange={(e) => dispatch({ type: e.target.value })}
          style={{ backgroundColor: color.bgcolor }}
        >
          <option value={""}>choose</option>
          <option value={"addition"}>add</option>
          <option value={"subract"}>sub</option>
          <option value={"multiply"}>mul</option>
          <option value={"division"}>div</option>
        </select>
        input1:
        <input name="updateInput1" onChange={handleChange} />
        input2:
        <input name="updateInput2" onChange={handleChange} />
        <input value={state.count} readOnly />
      </div>
    </>
  );
}

export default CalC;
