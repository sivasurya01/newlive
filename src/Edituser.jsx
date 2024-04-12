import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getusers, updateuser } from "./usersapi";
import { useMutation, useQuery, useQueryClient } from "react-query";

function Edituser() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const updateid = id;
  const {
    isError,
    isLoading,
    error,
    data: finduser,
  } = useQuery(["users", id], (id) => getusers(id));
  console.log(finduser, "user");
  console.log(updateuser(updateid, "data"));
  console.log(updateid);
  const [user, setUser] = useState([]);
  console.log(user, "useeffect");
  useEffect(() => {
    setUser(finduser);
  }, []);
  let findinguser = user.find((data) => data.id == updateid);
  console.log(findinguser);
  const [name, setName] = useState("");

  const updatemutation = useMutation(updateuser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const update = (e) => {
    e.preventDefault();
    updatemutation.mutate(updateid, name);
  };

  return (
    <div>
      Editusername
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        defaultValue={findinguser?.title}
      />
      <button onClick={(e) => update(e)}>update</button>
    </div>
  );
}

export default Edituser;
