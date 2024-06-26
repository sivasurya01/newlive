import React, { useEffect, useReducer, useState } from "react";
import { Input } from "sivasuryainput/src/componts/Input";
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getusers, postusers, deleteuser } from "./usersapi";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import useHoc from "./Hoc";
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
  const [counts, increment] = useHoc(0);
  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery("users", getusers, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });
  const [user, setUser] = useState([]);
  const [value, setValue] = useState("");

  const color = useSelector((state) => state.color.value); // Provide the selector
  console.log(color.bgcolor, "color");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "state");
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ type: name, value });
    dispatch({ type: name, value });
  };
  const content = JSON.stringify(users);
  let queryClient = useQueryClient();
  const addquery = useMutation(postusers, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
  const deletemudation = useMutation(deleteuser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
  useEffect(() => {
    setUser(users);
  }, [users]);
  let randomnumber = Math.random() * 10;
  const handlesumit = (e) => {
    e.preventDefault();
    addquery.mutate({
      userId: 1,
      id: String(randomnumber),
      title: value,
      completed: false,
    });
    setValue("");
  };
  let countries = [
    { name: "india", cities: ["tamilnadu", "bangalore"] },
    { name: "pak", cities: ["lagore"] },
  ];
  const [cities, setCities] = useState([]);
  const getcity = (e) => {
    console.log(e.target.value);
    let country = e.target.value;
    let finding = countries.find((data) => data.name === country);
    console.log(finding, "finding");
    setCities(finding.cities);
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
      <form onSubmit={(e) => handlesumit(e)}>
        <input
          type="text"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>adding</button>
      </form>
      <select onChange={(e) => getcity(e)}>
        {countries.map((data) => {
          return <option>{data.name}</option>;
        })}
      </select>
      <select>
        {cities?.map((data) => {
          return <option>{data}</option>;
        })}
      </select>
      <Test props={"testing"} />
      <button onClick={increment}>plus</button>
      {counts}
      {addquery.isLoading
        ? "loading"
        : user?.map((data) => {
            return (
              <p>
                {data.title}
                <Link to={`/Edituser/${data.id}`}>
                  <button>edit</button>
                </Link>
                <button onClick={() => deletemudation.mutate({ id: data.id })}>
                  delete
                </button>
              </p>
            );
          })}
    </>
  );
}

export default CalC;
export function Test({ props }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <p>{props}</p>
    </Suspense>
  );
}
