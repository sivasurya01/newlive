import React, { useEffect, useRef, useState, useContext } from "react";
import { Usercontext } from "./Multiple";
function ToDo2() {
  const user = useContext(Usercontext);
  console.log(user);
  const [value, setValue] = useState("");
  const [arrvalue, setArrvalue] = useState([]);
  const addfunction = (e) => {
    e.preventDefault();
    console.log(value, "value");
    let valuecheck = arrvalue.some((data) => data.type === value);
    if (valuecheck) {
      console.log("Already Exist");
      return;
    }
    let data = { type: value };
    if (value.length !== 0) {
      setArrvalue([...arrvalue, data]);
      console.log([...arrvalue, data], "stateval");
      localStorage.setItem("data", JSON.stringify([...arrvalue, data]));
    }
    setValue("");
  };
  useEffect(() => {
    let local = localStorage.getItem("data");
    console.log(local, "Localeffect");
    if (local) {
      setArrvalue(JSON.parse(local));
    } else {
      setArrvalue([]);
    }
  }, []);
  const deletefun = (e, index) => {
    e.preventDefault();
    const updatedArr = arrvalue.filter((_, idx) => idx !== index);
    console.log(updatedArr, "updatae");
    setArrvalue(updatedArr);
    localStorage.setItem("data", JSON.stringify(updatedArr));
  };

  const editfun = (e, index) => {
    e.preventDefault();
    // const newValue = prompt("Edit item:", arrvalue[index].type);
    setValue(arrvalue[index].type);
    const updatedArr = arrvalue.filter((_, idx) => idx !== index);
    console.log(updatedArr);
    setArrvalue(updatedArr);
    localStorage.setItem("data", JSON.stringify(updatedArr));
    // if (newValue !== null) {
    //   const updatedArr = [...arrvalue];
    //   updatedArr[index].type = newValue;
    //   setArrvalue(updatedArr);
    //   localStorage.setItem("data", JSON.stringify(updatedArr));
    // }
  };

  return (
    <div>
      <form>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit" onClick={addfunction}>
          add
        </button>
        <p>Context:{user}</p>
      </form>
      <div>
        {arrvalue?.map((datas, index) => {
          return (
            <>
              <p key={index}>
                {datas.type}{" "}
                <button onClick={(e) => editfun(e, index)}>edit</button>
                <button onClick={(e) => deletefun(e, index)}>delete</button>
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ToDo2;
