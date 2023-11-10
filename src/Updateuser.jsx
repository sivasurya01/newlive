import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateuser } from "./UserSlice";
function Updateuser() {
  const { id } = useParams();
  console.log(id, "id");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);
  console.log(user);
  const exectinguser = user.find((data) => data.id == id);
  console.log(exectinguser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const create = (e) => {
    e.preventDefault();
    dispatch(
      updateuser({
        id: id,
        name: name ? name : exectinguser.name,
        email: email ? email : exectinguser.email,
      })
    );
    navigate("/users");
  };
  return (
    <div>
      Updateuser
      <form onSubmit={(e) => create(e)}>
        name:
        <input
          type="text"
          name="name"
          defaultValue={exectinguser.name}
          onChange={(e) => setName(e.target.value)}
        />
        email:
        <input
          type="email"
          name="email"
          defaultValue={exectinguser.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default Updateuser;
