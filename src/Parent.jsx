import React, { createContext, useState } from "react";
export const ValueContext = createContext();
import Child from "./Child";
function Parent() {
  const [value, setValue] = useState("");
  return (
    <div>
      Parent
      <input onChange={(e) => setValue(e.target.value)} />
      <ValueContext.Provider value={value}>
        <Child />
      </ValueContext.Provider>
    </div>
  );
}

export default Parent;
