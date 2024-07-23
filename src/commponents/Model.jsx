import React from "react";

function Model({ close }) {
  return (
    <div>
      Model
      <p onClick={close}>close</p>
    </div>
  );
}

export default Model;
