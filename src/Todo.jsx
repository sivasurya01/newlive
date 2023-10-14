import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { color } from "./features/color";
const Todo = () => {
  const colors = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  console.log(colors.bgcolor, "color");
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  useEffect(() => {
    window.addEventListener("beforeunload", handleExit);
    return () => {
      window.removeEventListener("beforeunload", handleExit);
    };
  }, []);

  const handleExit = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const handleExitConfirmation = () => {
    if (window.confirm("Are you sure you want to exit the app?")) {
      window.close();
    }
  };
  const handlechange = (e) => {
    e.preventDefault();
    if (value.length != 0) {
      // setValue(value);
      // console.log(value);
      let data = { text: value };
      setArray([...array, data]);
      setValue("");
      console.log(array, "array");
    }
  };
  function markTodoComplete(dataId) {
    const updatedTodos = array.map((data, index) => {
      if (index === dataId) {
        // console.log(data.id, dataId, "id");
        return { ...data, completed: !data.completed };
      }
      return data;
    });
    setArray(updatedTodos);
  }

  return (
    <div style={{ backgroundColor: colors.bgcolor }}>
      <h1>Your PWA App</h1>
      <button onClick={() => dispatch(color({ bgcolor: "black" }))}>
        change
      </button>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" onClick={handlechange}>
          adds
        </button>
      </form>
      {array.map((data, index) => {
        console.log(index, "index");
        return (
          <>
            <div key={data.id}>
              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => markTodoComplete(data.index)}
              />
              {data.text}
            </div>
          </>
        );
      })}
      <button onClick={handleExitConfirmation}>Exit</button>
    </div>
  );
};

export default Todo;
