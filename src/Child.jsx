import React, { useContext } from "react";
import { ValueContext } from "./Parent";
function Child() {
  const getvalue = useContext(ValueContext);
  console.log(getvalue, "getvalue");
  return (
    <div>
      Child<p style={{ backgroundColor: getvalue }}>{getvalue}</p>
    </div>
  );
}

export default Child;
