import { createSlice } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  query,
  orderBy,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../Firebase";
const querySnapshot = await getDocs(collection(db, "Outlets"));
let data = querySnapshot.docs.map((doc) => ({
  ...doc.data(),
  id: doc.id,
}));
console.log(data);
let value = data;
export const OutletSlice = createSlice({
  name: "outlets",
  initialState: value,
  reducers: {
    addoutlets: async (state, action) => {
      console.log(action);
      try {
        const { email, password, description } = action.payload;
        console.log(description, email, password);
        const dbdata = {
          Email: email,
          password: password,
          description: description,
        };
        const dbref = collection(db, "Outlets");
        await addDoc(dbref, dbdata);
        console.log("Added to Firestore successfully");
      } catch (e) {
        console.error(e);
      }
    },
    updateoutlets: async (state, action) => {
      const querySnapshot = await getDocs(collection(db, "Outlets"));
      let data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(data);
      state(data);
    },
  },
});
export const { addoutlets, updateoutlets } = OutletSlice.actions;
export default OutletSlice.reducer;
