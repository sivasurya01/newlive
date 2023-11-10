import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adduser, deleteuser } from "./UserSlice";
function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users.value);
  console.log(users);
  const dispatch = useDispatch();
  const create = (e) => {
    e.preventDefault();
    dispatch(
      adduser({ id: users[users.length - 1].id + 1, name: name, email: email })
    );
    setEmail("");
    setName("");
  };
  const deletefun = (e, id) => {
    e.preventDefault();
    dispatch(deleteuser({ id: id }));
  };
  return (
    <div>
      Users
      <form onSubmit={(e) => create(e)}>
        name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">createuser</button>
      </form>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((data, id) => {
            return (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600   dark:text-blue-500 hover:underline"
                  >
                    <Link to={`/Updateuser/${data.id}`}>Edit</Link>
                  </a>
                  <button
                    className="font-medium text-blue-600 ml-2  dark:text-blue-500 hover:underline"
                    onClick={(e) => deletefun(e, data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
