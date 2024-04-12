import axios from "axios";
const users = axios.create({
  baseURL: "http://localhost:3000/",
});
export const getusers = async () => {
  const response = await users.get("/users");
  console.log(response.data);
  return response.data;
};
export const postusers = async (user) => {
  return await users.post("/users", user);
};
export const deleteuser = async ({ id }) => {
  return await users.delete(`/users/${id}`, id);
};
export const updateuser = async (id, data) => {
  try {
    return await users.patch(`/users/${id}`, { title: data });
  } catch (error) {
    throw error;
  }
};

export default users;
