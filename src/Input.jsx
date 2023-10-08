import React, { useState, createContext } from "react";
import Background from "./Background";
export const Colorcontext = createContext();
import MDEditor from "@uiw/react-md-editor";
import { useSelector } from "react-redux";
function Input() {
  const [state, setState] = useState("");
  const [value, setValue] = useState("");
  console.log(value, "val");
  const color = useSelector((state) => {
    state.color.value;
  });
  console.log(color, "color");
  return (
    <div>
      Input : <input type="color" onChange={(e) => setState(e.target.value)} />
      <p>{import.meta.env.VITE_APP_secrate}</p>
      <Colorcontext.Provider value={state}>
        <Background />
      </Colorcontext.Provider>
      <MDEditor value={value} onChange={setValue} />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
    </div>
  );
}

export default Input;
