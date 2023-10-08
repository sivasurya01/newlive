import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Multiple from "./Multiple";
import ToDo2 from "./ToDo2";
import Context from "./Context";
import Reduser from "./Reduser";
import Memo from "./Memo";
import CalC from "./CalC";
import StopWAtch from "./StopWAtch";
import Input from "./Input";
import Background from "./Background";
import UseReducer from "./UseReducer";
import Try from "./Try";
import { useSelector } from "react-redux";
import { color } from "./features/color";
import Counter from "./Couter";
import Parent from "./Parent";
import Child from "./Child";
const App = () => {
  const color = useSelector((state) => state.color.value);
  console.log(color, "color");
  return (
    <div className="" style={{ backgroundColor: `${color.bgcolor}` }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CalC />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Parent" element={<Parent />} />
          <Route path="/Child" element={<Child />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Try" element={<Try />} />
          <Route path="/Multiple" element={<Multiple />} />
          <Route path="/Background" element={<Background />} />
          <Route path="/Input" element={<Input />} />
          <Route path="/StopWAtch" element={<StopWAtch />} />
          <Route path="/Memo" element={<Memo />} />
          <Route path="/ToDo2" element={<ToDo2 />} />
          <Route path="/UseReducer" element={<UseReducer />} />
          <Route path="/Reduser" element={<Reduser />} />
          <Route path="/Context" element={<Context />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
