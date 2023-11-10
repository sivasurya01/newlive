import React, { useEffect, useState } from "react";
import {
  getCountries,
  getStatesByShort,
  getAll,
  getCities,
} from "countrycitystatejson";
import { useSelector, useDispatch } from "react-redux";
import { addoutlets } from "./features/Outlet";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Staecitycountry() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [countryvalue, setCountryvalue] = useState("");
  const [statevalue, setStatevalue] = useState("");
  const [cityvalue, setCityvalue] = useState("");
  const [shortname, setShortname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescrption] = useState("");
  console.log(statevalue, cityvalue, countryvalue);
  const outletdata = useSelector((state) => state.outlets);
  console.log(outletdata, "outlet");
  useEffect(() => {
    const get = getAll();
    console.log(get);
    const countrydta = getCountries();
    console.log(countrydta);
    const data = countrydta.map((data) => data);
    console.log(data);
    setCountry(data);
  }, []);
  const getcountry = async (e) => {
    e.preventDefault();
    let getdata = e.target.value;
    setCountryvalue(getdata);
    let filltering = country.filter((data) => data.name === getdata);
    console.log(filltering);
    console.log(filltering[0]?.shortName);
    setShortname(filltering[0]?.shortName);
    let states = await getStatesByShort(filltering[0]?.shortName);
    setState(states);
  };
  const getcity = async (e) => {
    e.preventDefault();
    let getdata = e.target.value;
    setStatevalue(getdata);
    let filtering = state.filter((data) => data === getdata);
    console.log(filtering);
    let cities = await getCities(shortname, filtering[0]);
    console.log(cities);
    setCity(cities);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, description);
  };
  const auth = getAuth();

  const sendpassword = (e) => {
    sendPasswordResetEmail(auth, email);
  };
  return (
    <div>
      Staecitycountry
      <select onChange={(e) => getcountry(e)}>
        <option value="">Country</option>;
        {country.map((data, index) => {
          return (
            <option key={index} value={data.name}>
              {data.name}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => getcity(e)}>
        <option value="">State</option>;
        {countryvalue &&
          state.map((data, index) => {
            return (
              <option key={index} value={data}>
                {data}
              </option>
            );
          })}
      </select>
      <select onChange={(e) => setCityvalue(e.target.value)}>
        <option value="">City</option>;
        {statevalue &&
          city.map((data, index) => {
            return (
              <option key={index} value={data}>
                {data}
              </option>
            );
          })}
      </select>
      email:
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      password:
      <input
        type="text"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      description:
      <input
        type="text"
        name="description"
        onChange={(e) => setDescrption(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            addoutlets({
              email: email,
              password: password,
              description: description,
            })
          )
        }
      >
        submit
      </button>
      <button onClick={(e) => sendpassword(e)}>send</button>
    </div>
  );
}

export default Staecitycountry;
