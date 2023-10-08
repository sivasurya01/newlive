import React, { useState, createContext } from "react";
import ToDo2 from "./ToDo2";
import { useDispatch } from "react-redux";
import {color} from "./features/color";
export const Usercontext = createContext();
function Multiple() {
  // const Usercontext = createContext();
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTime] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const [colors, setColor] = useState("");
  const handleTimeChange = (event) => {
    const timeValue = event.target.value;
    setSelectedTime(timeValue);

    // Format time as 10:10 AM
    const time = new Date(`2000-01-01T${timeValue}`);
    const formattedTimeString = time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setFormattedTime(formattedTimeString);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(color({ bgcolor: colors }));
        }}
      >
        color
      </button>
      <input type="time" value={selectedTime} onChange={handleTimeChange} />
      <p>Selected time: {formattedTime}</p>
      <Usercontext.Provider value="sivasurya">
        <ToDo2 />
      </Usercontext.Provider>
    </div>
  );
}

export default Multiple;
