import React, { useState } from "react";

export default function useHoc(items = 0) {
  const [counts, setCount] = useState(items);
  function increment() {
    setCount((pre) => pre + 1);
  }
  return [counts, increment];
}
