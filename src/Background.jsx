import { useContext } from "react";
import React from "react";
import { Colorcontext } from "./Input";
function Background() {
  const color = useContext(Colorcontext);
  console.log(color, "color");
  return (
    <div>
      Background :{" "}
      <div
        style={{
          borderColor: "black",
          border: "2px",
          width: "20px",
          height: "20px",
          backgroundColor: `${color}`,
        }}
      >
        kk
      </div>
    </div>
  );
}

export default Background;
