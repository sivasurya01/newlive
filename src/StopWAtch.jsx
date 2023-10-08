import React, { useEffect, useReducer, useRef } from "react";

function StopWAtch() {
  const intialstate = {
    isrunning: false,
    time: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "start":
        return { ...state, isrunning: true };
      case "stop":
        return { ...state, isrunning: false };
      case "reset":
        return { isrunning: false, time: 0 };
      case "tick":
        return { ...state, isrunning: true, time: state.time + 1 };
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, intialstate);
  const idref = useRef("");
  useEffect(() => {
    if (!state.isrunning) {
      return;
    }
    idref.current = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => {
      clearInterval(idref.current);
      idref.current = 0;
    };
  }, [state.isrunning]);
  return (
    <div>
      {state.time}
      <button onClick={() => dispatch({ type: "start" })}>start</button>
      <button onClick={() => dispatch({ type: "stop" })}>stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>restart</button>
    </div>
  );
}

export default StopWAtch;
